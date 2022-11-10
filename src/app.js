import express from 'express'
import entrenosRutes from './routes/entrenos.routes.js'


const app = express()
const cors = require('cors')

app.use('/api',entrenosRutes)
app.use(cors())

app.use((req,res,next) => {
    res.status(404).json({
        message: 'Not found'
    })
})

export default app;