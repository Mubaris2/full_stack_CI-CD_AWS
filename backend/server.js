const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check (useful for Docker later)
app.get("/", (req, res) => {
    res.send("Backend is running");
});

// API endpoint
app.get("/student-details", (req, res) => {
    res.status(200).json({
        name: "Mohamed Sheik Mubaris",
        rollNumber: "2023BCS0062"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});