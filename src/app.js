import express from 'express'
import entrenosRutes from './routes/entrenos.routes.js'
import cors from 'cors'
import bodyParser from 'body-parser'


const app = express()
// const origenes = [ aqui se poden posar ses url que poden accedir a s'API ]

app.use(cors({
    origin: '*' // si posam sa variable origenes, nomes hi accediran es ja dits
}))

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api',entrenosRutes)

app.use((req,res,next) => {
    res.status(404).json({
        message: 'Not found'
    })
})

export default app;