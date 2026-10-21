import { createpatient, GetAllPatients,GetAllPatientsById } from "../Controller/HospitalController.js";
import express from "express";
const router=express.Router();

router.get("/",GetAllPatients);

router.post("/",createpatient);

router.get("/:id",GetAllPatientsById);

export default router;