import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path: "./database/config.env"});

export const conn = async () => {
    try{
        await mongoose.connect(process.env.MONGOURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false
        }),
        console.log("Database connected!");
    }
    catch(e){
        console.log(e);
    }
}