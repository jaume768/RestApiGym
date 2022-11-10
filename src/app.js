import express from 'express'
import entrenosRutes from './routes/entrenos.routes.js'


const app = express()

app.use('/api',entrenosRutes)

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
})

app.use((req,res,next) => {
    res.status(404).json({
        message: 'Not found'
    })
})

export default app;