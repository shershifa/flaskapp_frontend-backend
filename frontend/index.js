const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "form.html"));
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://backend:5000/submit", req.body);
    res.send(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Something went wrong");
  }
});

app.listen(3000, () => console.log("Frontend running on http://localhost:3000"));

