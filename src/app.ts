import express from 'express'
const app = express()

app.get('/ping', (request, response)=>response.send('server is working'))
export default app;