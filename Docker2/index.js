const express = require("express");
const pool = require("./db");

const app = express();
app.use(express.json());

// Create table safely on startup
(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT,
      age INT,
      city TEXT
    );
  `);
})();

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// Create user
app.post("/users", async (req, res) => {
  const { name, age, city } = req.body;

  const result = await pool.query(
    "INSERT INTO users(name, age, city) VALUES($1, $2, $3) RETURNING *",
    [name, age, city]
  );

  res.json(result.rows[0]);
});

// Get users
app.get("/users", async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  res.json(result.rows);
});

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

//Delete User
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  await pool.query("DELETE FROM users WHERE id = $1", [id]);

  res.json({ message: "User deleted" });
});
