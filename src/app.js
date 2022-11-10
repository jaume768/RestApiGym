import express from 'express'
import entrenosRutes from './routes/entrenos.routes.js'
import cors from 'cors'


const app = express()

app.use('/api',entrenosRutes)
app.use(cors())

app.use((req,res,next) => {
    res.status(404).json({
        message: 'Not found'
    })
})

export default app;