const express = require("express");
const mongoose = require('mongoose');
const app = express();
const User = require('./models/User');
const bodyParser = require('body-parser');

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(bodyParser.json());


app.get("/", (req, res) => res.send("Hello aa"));

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server is running on port ${port}`));