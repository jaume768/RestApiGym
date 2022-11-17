import { Router } from "express";
import {getEntrenos,getEntrenosPierna,getEntrenosPush,getEntrenosPull,updateEntreno,getHistorial,deleteHistorial} from '../controllers/entrenos.controller.js'

const router = Router()

router.get('/entrenos',getEntrenos);

router.get('/entrenoPiernas',getEntrenosPierna); 

router.get('/entrenoPush',getEntrenosPush);

router.get('/entrenoPull',getEntrenosPull);

router.patch('/updateEntreno/:id',updateEntreno);

router.get('/historial/:id',getHistorial);

router.delete('/deleteHistorial',deleteHistorial);

export default router
