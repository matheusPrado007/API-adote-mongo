const express = require("express");
const cors = require('cors');
const app = express();
app.use('/uploads', express.static('uploads'));
require("dotenv").config();
require("./db");

app.use(cors({ origin: "*" }));


const port = process.env.PORT || 3000;

const pictureRouter = require("./routes/picture.js");

app.use("/pictures", pictureRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
