import express from 'express'
import { User } from '../models/userSchema.js'

const router = express.Router()

//! REGISTER A NEW USER
router.post('/', async(req,res)=>{
    try{
        const { name, email, password, role } = req.body
        const newUser = new User({
            name,
            email,
            password,
            role
        })
        await newUser.save()
        res.status(201).json({message:"User created successfully", user: newUser})
    }
    catch(err){
        console.error(err)
        res.status(500).json({message:"User creation failed", details: err.message})
    }
})

//! LOGIN USER
router.get('/', async (req,res)=>{
    try{
        const { email, password } = req.body
        const user = await User.findOne({email})
        if(!user){
           return res.status(404).json({error:"User not found!"})
        }
        if(password !== user.password){
            return res.status(401).json({error: "Password is incorrect"})
        }
        res.status(200).json({ user })
    }catch(err){
        res.status(500).json({message:"Server error", details: err.message})
    }
})

export const userRouter = router