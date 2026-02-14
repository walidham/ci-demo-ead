const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World - CI/CD with GitHub Actions DSI FEDDDa ");
});

const port = process.env.PORT || 80;
app.listen(port,'0.0.0.0', () => console.log(`Server running on port ${port}`));