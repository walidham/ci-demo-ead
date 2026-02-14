const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World - CI/CD with GitHub Actions + Docker! JOO ");
});

const port = process.env.PORT || 80;
app.listen(port, () => console.log(`Server running on port ${port}`));