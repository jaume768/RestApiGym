import { Router } from "express";
import {getEntrenos,getEntrenosPierna,getEntrenosPush,getEntrenosPull,updateEntreno} from '../controllers/entrenos.controller.js'

const router = Router()

router.get('/entrenos',getEntrenos);

router.get('/entrenoPiernas',getEntrenosPierna); 

router.get('/entrenoPush',getEntrenosPush);

router.get('/entrenoPull',getEntrenosPull);

router.patch('/updateEntreno/:id',updateEntreno);

export default router
