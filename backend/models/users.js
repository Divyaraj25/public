import mongoose from "mongoose";

const users = mongoose.Schema({
    email: String,
    username: String,
    contact: String,
    password: String
})

export default mongoose.model("user", users)