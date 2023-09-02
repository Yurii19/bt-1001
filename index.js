const express = require("express");
import { expeditions } from "./src/expeditions";
var cors = require('cors');
// Initialize Express
const app = express();
app.use(cors())

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/expeditions", (req, res) => {
  res.send(expeditions);
});

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});
// Export the Express API
module.exports = app;

