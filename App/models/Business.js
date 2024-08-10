import {model,Schema} from 'mongoose'

export const UserSchema = new Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},     
    User_Id:{type:mongoose.Schema.Types.ObjectId, ref:'User',
        required: true}              
},{
    timestamps:true
})

export default model('User',UserSchema)