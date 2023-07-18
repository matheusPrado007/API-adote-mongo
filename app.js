const express = require("express");
const cors = require('cors');
const app = express();

require("dotenv").config();
require("./db");

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));


const port = process.env.PORT || 3000;

const pictureRouter = require("./routes/picture");

app.use("/pictures", pictureRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
