const express = require("express");
const ProductRoute = require("./routes/ProductRoute");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const cors = require("cors");

dotenv.config();
connectdb(); // Connect to MongoDB

const app = express();

// ✅ REQUIRED MIDDLEWARES
app.use(cors());
app.use(express.json()); // 🔥 THIS LINE FIXES 500 ERROR

// Routes
app.use("/sleeping", ProductRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
