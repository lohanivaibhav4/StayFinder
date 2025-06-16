import express from 'express'
const server = express()
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const api = process.env.API

//!MIDDLEWARES
server.use(express.json())


//!DATABASE CONNECTION 
mongoose
.connect(process.env.MONGO_URI)
.then(()=>{console.log("Database connected")})
.catch((e)=>{console.log("Error connecting to database",e)})



//!ROUTERS
import { listingRouter } from './routes/listingRoutes.js'
server.use(`${api}/listings`,listingRouter)
server.use(`${api}/createListing`,listingRouter)

import { userRouter } from './routes/userRoutes.js'
server.use(`${api}/register`,userRouter)
server.use(`${api}/login`, userRouter)




const PORT = process.env.PORT 
server.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})
