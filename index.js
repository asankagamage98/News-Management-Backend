require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./src/utils/dbConnection");
const bodyParser = require("body-parser");
dbConnect();


app = express();



app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Asanka Gamage - News Application Service working");
});



const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.info(`Backend running on http://localhost:${PORT}`);
});


