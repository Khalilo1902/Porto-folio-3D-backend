
import express from "express"
import { getAllContact, postContact } from "../controller/contactController"




const contactRouter = express.Router()

contactRouter.post("/send",postContact)
contactRouter.get("/get",getAllContact)




export default contactRouter