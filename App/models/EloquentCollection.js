
import { model } from "mongoose"
import { UserSchema } from "./User.js"
import { BusinessSchema } from "./Business.js"
<<<<<<< HEAD
import {LocationSchema} from "./Loaction.js"

export default async () => {
  model('users', UserSchema);
  model('businesses', BusinessSchema);
  model('locations',LocationSchema)
}
=======

export default async () =>{
  model('users',UserSchema);
  model('businesses',BusinessSchema);
}
>>>>>>> d8bad99e7c46ce2678566c839b3c62dd86b5b6ee
