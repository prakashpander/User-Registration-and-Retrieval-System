const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db'); // ✅ Ensure DB is imported
const User = require('./module/user');    // ✅ Ensure User model is correctly imported

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // ✅ Connect Database First

app.get('/', (req, res) => {
    res.send('Hello World Home page');
});

app.post('/create', async (req, res) => {
    try {
        const data = req.body;
        const userData = await User.create(data);  // ✅ Use `create()`
        res.send(`Data inserted: ${JSON.stringify(userData)}`);
    } catch (error) {
        res.send(error.message);
    }
});

app.get('/allData', async (req, res) => {
    try {
        const data = await User.find();
        res.send(data.length > 0 ? data : "No data found");
    } catch (error) {
        res.send(error.message);
    }
});

app.get('/get-data', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        res.send(user ? user : "Data not found");
    } catch (error) {
        res.send(error.message);
    }
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
