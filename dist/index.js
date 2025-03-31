"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnect_1 = __importDefault(require("./db_connect/dbConnect"));
const feedbackRouter_1 = __importDefault(require("./routes/feedbackRouter"));
const cors_1 = __importDefault(require("cors"));
const contactRouter_1 = __importDefault(require("./routes/contactRouter"));
dotenv_1.default.config();
(0, dbConnect_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
//app.use(cors({    origin: 'http://localhost:3000',  credentials: true  }));
app.use((0, cors_1.default)({ credentials: true, origin: "https://khalil-webdev.de" }));
app.use("/feedback", feedbackRouter_1.default);
app.use("/contact", contactRouter_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running an PORT ${PORT}`));
//# sourceMappingURL=index.js.map