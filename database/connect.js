import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path: "./database/config.env"});
mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
const connect = mongoose.connection;
connect.on('error', console.error.bind(console, 'connect error:'));
connect.once('open', function() {
    console.log('We are connected to the database!');
});

export default connect;