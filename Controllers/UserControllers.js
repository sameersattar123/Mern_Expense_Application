import { userModel } from "../models/userModel.js"

export const LoginController = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email, password })
        if (!user) {
            return res.status(404).send("User Not Found")
        }
        res.status(200).json({
            success : true ,
            user
        })
    } catch (error) {
        res.status(400).json({ success: false, error })
    }
}
export const RegisterController = async (req, res) => {
    try {
        const newUser = new userModel(req.body)
        const user = await newUser.save()
        res.status(201).json({
            success : true ,
            user
        })
    } catch (error) {
        res.status(400).json({ success: false, error })
    }
}