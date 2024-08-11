import { model } from "mongoose"
import { UserSchema } from "./User.js"
import { BusinessSchema } from "./Business.js"

export default async () =>{
  model('users',UserSchema);
  model('businesses',BusinessSchema);
}