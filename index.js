const express = require("express");
const app = express();
const text = require("./routes/test");
const connectDB = require("./connect/connectdb");
require("dotenv").config();

app.use(express.json());

//routes
app.use("/api/text", text);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.CONNECTION_URL);
    console.log(`Database connected`);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

start();
