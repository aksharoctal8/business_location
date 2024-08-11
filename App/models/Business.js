import { model, Schema, mongoose } from 'mongoose'

export const BusinessSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },

 
}, {
    timestamps: true
})

export default model('Business', BusinessSchema)