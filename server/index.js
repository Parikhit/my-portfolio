const express = require('express');
const cors = require('cors');
import path from 'path';
const dotenv = require('dotenv');

const addUserData = require('./controller/user.controller');

const __dirname = path.resolve();

const mongoose = require('mongoose');
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);

app.post('/', addUserData);

app.use('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

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
