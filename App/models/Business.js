import { model, Schema, mongoose } from 'mongoose'

export const BusinessSchema = new Schema({
<<<<<<< HEAD
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    location_id: {
      type: Array, ref: 'locations'
    },
    name: { type: String, required: true }

=======
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },

 
>>>>>>> d8bad99e7c46ce2678566c839b3c62dd86b5b6ee
}, {
    timestamps: true
})

export default model('Business', BusinessSchema)