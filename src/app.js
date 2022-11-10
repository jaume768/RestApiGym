import express from 'express'
import entrenosRutes from './routes/entrenos.routes.js'
import cors from 'cors'


const app = express()
  
// Then pass these options to cors:
app.use(cors({
    origin: 'http://127.0.0.1:5500'
}));

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