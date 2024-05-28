const express = require("express");
const cors = require("cors");
const app = express();

// Load environment variables
require('dotenv').config();

var corsOptions = {
  origin: "http://localhost:5173"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

// Sync database with alter:true to update existing tables without dropping them
db.sequelize.sync({ alter: true }).then(() => {
  console.log('Resynced Db');
  // Call the seed function to insert initial data if necessary
  require('./app/seeds')();
}).catch(err => {
  console.error('Failed to sync database:', err.message);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Empower Minds." });
});

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
