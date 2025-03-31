"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const feedbackController_1 = require("../controller/feedbackController");
const feedbackRouter = express_1.default.Router();
feedbackRouter.post("/add", feedbackController_1.createFeedback);
feedbackRouter.get("/all", feedbackController_1.getAllFeedback);
exports.default = feedbackRouter;
//# sourceMappingURL=feedbackRouter.js.map