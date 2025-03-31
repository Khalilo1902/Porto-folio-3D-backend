"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactController_1 = require("../controller/contactController");
const contactRouter = express_1.default.Router();
contactRouter.post("/send", contactController_1.postContact);
exports.default = contactRouter;
//# sourceMappingURL=contactRouter.js.map