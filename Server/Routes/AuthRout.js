 import express from 'express';
import { registerUser } from '../Controlers/AuthController.js';
 
 const router= express. Router()

 router.post('/register',registerUser)

 export default router