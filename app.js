const express = require("express");
const cors = require('cors');
const app = express();
app.use('/uploads', express.static('uploads'));

require("dotenv").config();
require("./db");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://adotecomamor.netlify.app/index.html#', 'http://127.0.0.1:5500/');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});
app.use(cors());


const port = process.env.PORT || 3000;

const pictureRouter = require("./routes/picture");

app.use("/pictures", pictureRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
