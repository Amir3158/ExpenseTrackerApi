import { Router } from "express";
import {registerUser, loginUser } from '../Controllers/users.controller';

const router = Router();

router.post("/", registerUser);
router.post('/login', loginUser);

export default router;