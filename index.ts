import express from "express";
import dotenv from "dotenv";
import dbConnect from "./db_connect/dbConnect";
import feedbackRouter from "./routes/feedbackRouter";
import cors from "cors"
import contactRouter from "./routes/contactRouter";
dotenv.config();

dbConnect()
const app = express();


app.use(express.json()); 
//app.use(cors({    origin: 'http://localhost:3000',  credentials: true  }));
 app.use(cors({ credentials: true, origin: "https://khalil-webdev.de" }));


app.get('/', (req, res) => {
    res.send('Hello World');
  });

app.use("/feedback",feedbackRouter)
app.use("/contact",contactRouter)

const PORT = process.env.PORT || 5200;

app.listen(PORT, () => console.log(`Server is running an PORT ${PORT}`));
