const express = require("express");

const app = express();
const PORT = 8080;

app.get("/students", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Haritha Sandaruwan",
      degree: "Software Engineering"
    },
    {
      id: 2,
      name: "Test Student",
      degree: "Computer Science"
    }
  ]);
});

app.listen(PORT, () => {
  console.log(`Student API running on http://localhost:${PORT}`);
});