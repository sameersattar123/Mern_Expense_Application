import {TransectionModel} from "../models/transectionModel.js"
import moment from "moment"

export const addAllTransection = async(req,res) => {
    try {
        const newTransection = new TransectionModel(req.body)
        await newTransection.save()
        res.status(201).send("Transection added")   
    } catch (error) {
        res.status(500).json(error)
    }
}
export const getAllTransection = async(req,res) => {
    try {
        const {frequency , select , type} = req.body
        const Transection = await TransectionModel.find({                                     
            ...(frequency !== "custom"
            ? {
                date: {
                  $gt: moment().subtract(Number(frequency), "d").toDate(),  
                },
              }
            : {
                date: {
                  $gte: select[0], 
                  $lte: select[1],   
                },
              }),
              userid: req.body.userid,
              ...(type !== "all" && {type}),
        }) 
        res.status(200).json(Transection)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const EditTransection = async(req , res) => {
    try {
        await TransectionModel.findByIdAndUpdate({_id : req.body.payload})
        res.status(200).send('Edit Successfully')
    } catch (error) {
        res.status(500).json(error)
        
    }
}