import express from 'express'
import { Listing } from '../models/listingSchema.js'
const router = express.Router()

//!GET ALL LISTINGS
router.get('/', async (req,res)=>{
    try{
        const allListings = await Listing.find()
        res.status(200).json({allListings})
    }catch(err){
        res.status(500).json({error:"Error fetching listings"})
    }
})

//! GET A PROPERTY BY ID 
router.get('/:id', async (req,res)=>{
    try{
        const { id } = req.params
        const propertyFound = await Listing.findById(id)
        if(!propertyFound){
            res.status(404).json({error:"Cannot find this property listing!"})
        }
        res.status(200).json({propertyFound})
    }catch(err){
        res.status(500).json({error:"Server error", details:err.message})
    }
})

//! ADD NEW LISTING
router.post('/', async (req, res)=>{
    try{
        const { hostId, propertyName, propertyDescription, propertyLocation, imageUrl, price } = req.body
        const newListing = new Listing({
            hostId,
            propertyName, 
            propertyDescription,
            propertyLocation, 
            imageUrl, 
            price
        })
        if(!newListing){
            return res.status(500).json({message:"Error listing property!"})
        }
        await newListing.save()
        res.status(201).json({message:"Property listed successfully", property:newListing})

    }catch(err){
        return res.status(500).json({error:"Server error", details:err.message})
    }
})


export const listingRouter = router

