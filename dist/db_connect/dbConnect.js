"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnect = async () => {
    try {
        const conn = await mongoose_1.default.connect(process.env.MONGO_URL || "");
        console.log(`Database ist connected ${conn.connection.host}`);
    }
    catch (error) {
        console.log("database failed connect");
    }
};
exports.default = dbConnect;
//# sourceMappingURL=dbConnect.js.map