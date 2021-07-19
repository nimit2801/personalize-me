import dotenv from 'dotenv';
dotenv.config({path: "./database/config.env"});
console.log(process.env.MONGOURI);