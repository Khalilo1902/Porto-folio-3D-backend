"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFeedback = exports.createFeedback = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const feedbackSchema_1 = __importDefault(require("../schema/feedbackSchema"));
const createFeedback = (0, express_async_handler_1.default)(async (req, res) => {
    const { name, testimonial, designation, company, image, visitorId } = req.body;
    try {
        const ipAddress = req.ip || req.connection.remoteAddress;
        res.cookie('userIp', ipAddress, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        const create = await feedbackSchema_1.default.create({
            name,
            testimonial,
            designation,
            company,
            image,
            visitorId,
            ipAddress
        });
        create.save();
        res.json({ "message:create feedback successfully": create });
    }
    catch (error) {
        throw new Error(" fails create feedback");
    }
});
exports.createFeedback = createFeedback;
const getAllFeedback = (0, express_async_handler_1.default)(async (req, res) => {
    try {
        const feedback = await feedbackSchema_1.default.find();
        res.json(feedback);
    }
    catch (error) {
        throw new Error(" fails get feedback");
    }
});
exports.getAllFeedback = getAllFeedback;
//# sourceMappingURL=feedbackController.js.map