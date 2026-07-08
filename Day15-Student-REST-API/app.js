const express = require("express");

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send(`
    <h1>🎓 Student Management REST API</h1>

    <h3>Available Endpoints</h3>

    <ul>
      <li>GET /students</li>
      <li>GET /students/:id</li>
      <li>POST /students</li>
      <li>PUT /students/:id</li>
      <li>DELETE /students/:id</li>
    </ul>

    <p>Developed by Shaik Noore Hafsa ❤️</p>
  `);
});

const studentRoutes = require("./routes/studentRoutes");

app.use("/students", studentRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
