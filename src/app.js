import express from 'express'
import entrenosRutes from './routes/entrenos.routes.js'


const app = express()

app.use('/api',entrenosRutes)

app.use((req,res,next) => {
    res.status(404).json({
        message: 'Not found'
    })
})

export default app;