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
})

export default model('User',UserSchema)