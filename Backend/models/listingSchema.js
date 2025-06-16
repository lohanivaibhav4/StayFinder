import mongoose, { Schema } from "mongoose";
import { User } from "./userSchema.js";

const ListingSchema = new mongoose.Schema({
    hostId: {
        type:Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    propertyName:{
        type: String,
        required: true,
        trim: true
    },
    propertyDescription:{
        type: String,
        required:true,
    },
    imageUrl:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    calander:{
        availableDates:{
            type:[Date],
            default:[]
        },
        bookedDates:{
            type:[Date],
            default:[]
        }
    },

},{timestamps:true})


export const Listing = mongoose.model('Listing', ListingSchema)