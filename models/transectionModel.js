import mongoose from "mongoose"


const TransectionSchema = mongoose.Schema({
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    reference: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
},
    {
        timestamps: true 
    }
)

export const TransectionModel = mongoose.model("transection", TransectionSchema) 