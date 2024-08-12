import { model, Schema, mongoose } from 'mongoose'

export const LocationSchema = new Schema({
    business_id: { type: String, required: true },
    loaction: { type: String, required: true },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
})

export default model('Location', LocationSchema)