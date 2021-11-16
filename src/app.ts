import express from 'express'
const app = express()

app.get('/ping', ()=>console.log('server working'))
export default app;