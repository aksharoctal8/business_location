import { model } from "mongoose"
import { UserSchema } from "./User.js"

export default async () =>{
  model('users',UserSchema);
}