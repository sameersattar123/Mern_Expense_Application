import express from "express";
import {LoginController, RegisterController}  from "../Controllers/UserControllers.js";

const router  = express.Router()


router.post("/login", LoginController)
router.post("/register", RegisterController)

export default router;




