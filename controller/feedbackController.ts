import asyncHandler from "express-async-handler"
import {Request,Response} from "express"
import feedbackSchema from "../schema/feedbackSchema";




const createFeedback = asyncHandler(async(req:Request,res:Response)=>{
    const {name,testimonial,designation,company,image,visitorId} = req.body;
try {
    const ipAddress = req.ip || req.connection.remoteAddress;

    res.cookie('userIp', ipAddress, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

    const create = await feedbackSchema.create({
        name,
        testimonial,
        designation,
        company,
        image,
        visitorId,
        ipAddress
    })
    create.save()
    res.json({"message:create feedback successfully":create})
} catch (error) {
    throw new Error(" fails create feedback")
}
})


const getAllFeedback = asyncHandler(async(req:Request,res:Response)=>{
   try {
    const feedback = await feedbackSchema.find()
    console.log('Feedback retrieved:', feedback);

    res.json(feedback)
   } catch (error) {
    throw new Error(" fails get feedback")
   }
})


export {createFeedback,getAllFeedback}