import express from 'express'
import dotenv from 'dotenv'
import app from './app'
dotenv.config()

const server = express()
server.use(app)
const port = process.env.PORT || 3000 
server.listen(port, ()=>console.log(`server runing in port ${port}`))