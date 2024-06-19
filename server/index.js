const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require('./db');
const locationRouter = require('./routes/locationRouter');

const app = express();

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Bali Edventures" });
});

app.use('/api', locationRouter); // Moved this above the listen call

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
