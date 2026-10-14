const express = require("express");
const path = require("path");

const app = express();
const publicDirectory = path.join(__dirname, "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicDirectory));

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
