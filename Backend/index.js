const express = require('express');
const cors = require('cors');
require('dotenv').config();
const user = require('./module/user');
const User = require('./module/user');
const database = require('./config/db');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World Home page');
});

app.post('/create', async (req, res) => {

    try {
        const data = req.body;
        const userData = await User.insertOne(data);

        if (!userData) {
            res.send('Data not found');
        }
        else {
            res.send(`Data found ${userData}`);
        }
    } catch (error) {
        res.send(error.message);
    }

})

app.get('/allData', async (req, res) => {
    try {
        const data = await user.find();
        if (!data) {
            res.send("data not found");
        }
        else {
            res.send('data found');
        }
    } catch (error) {
        res.send(error.message);
    }
})

app.get('/get-data', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await user.findOne({ email: email, password: password });
        if (!user) {
            res.send("data not found");
        }
        else {
            res.send(user);
        }

    } catch (error) {
        res.send(error.message);

    }
})

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`)
})