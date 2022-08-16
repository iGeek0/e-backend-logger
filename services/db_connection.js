
const mongoose = require("mongoose");
require('dotenv').config();
const uri = `mongodb+srv://${process.env.USER_ID}:${process.env.PASSWORD}@cluster0.fb9qg7k.mongodb.net/?retryWrites=true&w=majority`;

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToMongoDB;