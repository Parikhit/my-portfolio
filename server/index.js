const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const addUserData = require('./controller/user.controller');

const mongoose = require('mongoose');
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: 'https://parikhits-portfolio-api.vercel.app/',
    })
);

app.post('/', addUserData);

const startServer = () => {
    mongoose
        .connect(process.env.MONGO_URL)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.log(error));

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
};

startServer();
