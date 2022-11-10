import express from 'express'
import entrenosRutes from './routes/entrenos.routes.js'
import cors from 'cors'


const app = express()
const origenes = ['http://127.0.0.1:5500','http://83.46.144.229','null']

app.use(cors({
    origin: origenes
}))

app.use('/api',entrenosRutes)

app.use((req,res,next) => {
    res.status(404).json({
        message: 'Not found'
    })
})

export default app;