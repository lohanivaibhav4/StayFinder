import mongoose, { Schema } from "mongoose";
import { User } from "./userSchema.js";
import { Listing } from "./listingSchema.js";

const BookingSchema = new mongoose.Schema({
    guestId:{
        type:Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    listingId:{
        type:Schema.Types.ObjectId,
        ref:Listing,
        required:true
    },
    hostId:{
        type:Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    startDate:{
        type:Date,
        required:true
    },
    endDate:{
        type:Date,
        required:true
    },
    bookingDate:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:String,
        enum:['pending','confirmed','cancelled','completed'],
        default:'pending'
    },
    totalPrice:{
        type:Number,
        required:true
    },
    paymentStatus:{
        type:String,
        enum:['unpaid','paid','refunded'],
        default:'unpaid'
    },
    transactionId:{
        type:String,
        default:''
    }
},{ timestamps:true })

export const Booking = mongoose.model('Booking', BookingSchema)