import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL || "");
    console.log('MONGO_URL:', process.env.MONGO_URL);

    console.log(`Database ist connected ${conn.connection.host}`);
  } catch (error) {
    console.log("database failed connect");
  }
};


export default dbConnect