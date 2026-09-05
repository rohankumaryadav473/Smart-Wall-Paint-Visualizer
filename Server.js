const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const multer = require("multer");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(path.join(__dirname, "..")));

// Serve uploaded images
app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "../index.html")
    );
});

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch((error) => {
        console.log("MongoDB connection failed:", error.message);
    });

// Multer configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },

    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage });

// Upload image
app.post("/api/upload", upload.single("image"), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                message: "Please upload an image"
            });
        }

        res.json({
            message: "Image uploaded successfully",
            imageUrl: `/uploads/${req.file.filename}`
        });

    } catch (error) {
        res.status(500).json({
            message: "Upload failed",
            error: error.message
        });
    }
});

// Test API
app.get("/api/test", (req, res) => {
    res.json({
        message: "Smart Wall Paint Visualizer API is working"
    });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});