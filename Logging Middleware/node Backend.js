const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.get("/get-token", async (req, res) => {
  try {
    const response = await axios.post("http://20.244.56.144/evaluation-service/auth", {
      email: "mekalavishnuvardhan96@gmail.com",
      name: "Mekala Vishnu Vardhan",
      rollNo: "22FE1A4335",
      accessCode: "YzuJeU",
      clientID: "d9cbb699-6a27-44a5-8d59-8b1befa816da",
      clientSecret: "tVJaaaRBSSeXcRXeM"
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
