import userModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'

//registering a new user
export const registerUser =async(req,res)=>{
const {username,password,firstname,lastname}=req.body
console.log(req.body);

const salt= await bcrypt.genSalt(10)
const hashPassword= await bcrypt.hash(password,salt)
console.log(hashPassword);

const newUser= new userModel({username,password:hashPassword,firstname,lastname})

console.log(newUser);
try {
    await newUser.save()
    res.status(200).json(newUser)
} catch (error) {
    res.status(200).json({message:error.message})
}
}