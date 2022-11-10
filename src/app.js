import express from 'express'
import entrenosRutes from './routes/entrenos.routes.js'


const app = express()
const cors = require('cors')

app.use('/api',entrenosRutes)
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}))

app.use((req,res,next) => {
    res.status(404).json({
        message: 'Not found'
    })
})

export default app;