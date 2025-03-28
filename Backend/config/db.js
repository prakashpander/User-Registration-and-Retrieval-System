const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {

    serverSelectionTimeoutMS: 5000

}).then(() => console.log("Database connected successfully"))
    .catch(err => console.log("MongoDB Connection Error:", err));


