import { model, Schema, mongoose } from 'mongoose'

export const BusinessSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    location_id: {
      type: Array, ref: 'locations'
    },
    name: { type: String, required: true }

}, {
    timestamps: true
})

export default model('Business', BusinessSchema)