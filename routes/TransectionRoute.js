import express from "express";
import { addAllTransection, getAllTransection , EditTransection } from "../Controllers/TransectionController.js";

const router  = express.Router()


router.post("/add-transection",addAllTransection )
router.post("/get-transection", getAllTransection)
router.post("/edit-transection", EditTransection)

export default router;  