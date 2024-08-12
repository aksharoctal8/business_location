<<<<<<< HEAD
import { model, Schema, mongoose } from 'mongoose'

export const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true
=======
import {model,Schema,mongoose} from 'mongoose'

export const UserSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},   
    Business_Id: {
        type:Array, ref: 'businesses',
        required: true
    }                
},{
    timestamps:true
>>>>>>> d8bad99e7c46ce2678566c839b3c62dd86b5b6ee
})

export default model('User', UserSchema)
