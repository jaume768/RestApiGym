import { Router } from "express";
import {getEntrenos,getEntrenosPierna,getEntrenosPush,getEntrenosPull} from '../controllers/entrenos.controller.js'

const router = Router()

router.get('/entrenos',getEntrenos);

router.get('/entrenoPiernas',getEntrenosPierna); 

router.get('/entrenoPush',getEntrenosPush);

router.get('/entrenoPull',getEntrenosPull);

export default router
