
import { model } from "mongoose"
import { UserSchema } from "./User.js"
import { BusinessSchema } from "./Business.js"
import {LocationSchema} from "./Loaction.js"

export default async () => {
  model('users', UserSchema);
  model('businesses', BusinessSchema);
  model('locations',LocationSchema)
}
