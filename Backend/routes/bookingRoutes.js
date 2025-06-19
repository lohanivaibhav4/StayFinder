import express from 'express'
import { Booking } from '../models/bookingSchema.js'

const router = express.Router()

//! CREATE A NEW BOOKING
router.post('/', async (req, res)=>{
    try{
        const { guestId, listingId, hostId, startDate, endDate, totalPrice } = req.body
        const newBooking = new Booking({
            guestId, 
            listingId, 
            hostId, 
            startDate, 
            endDate, 
            totalPrice
        })
        const listing = await Booking.find({listingId})
        if(listing.length === 0){
            await newBooking.save()
            return res.status(201).json(newBooking)
        }else{
            const isBooked = listing.some((list)=>{
                return(
                    new Date(list.startDate).toDateString() === new Date(startDate).toDateString() ||
                    new Date(list.endDate).toDateString() === new Date(endDate).toDateString()
                )
            })
            if (isBooked) {
                return res.status(409).json({ error: "Already booked for this date" });
            }else{
                await newBooking.save()
                return res.status(201).json(newBooking)
            }
            
        }
        
    }catch(err){
        res.status(500).json({error:"Server error", details:err.message})
    }
})

export const bookingRouter = router