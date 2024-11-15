// // const express = require('express');
// import express from 'express';
// import dotenv from 'dotenv';
// import path from 'path';
// import connectDB from "./config/db.js";
// import cors from 'cors';
// import {
//   errorResponserHandler,
//   invalidPathHandler,
// } from "./middleware/errorHandler.js";

// // Routes
// import userRoutes from "./routes/userRoutes.js";
// import postRoutes from "./routes/postRoutes.js";
// import commentRoutes from "./routes/commentRoutes.js";
// import postCategoriesRoutes from "./routes/postCategoriesRoutes.js";

// import { fileURLToPath } from 'url';



// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config();
// connectDB();
// const app = express();
// app.use(express.json());

// const corsOptions = {
//   exposedHeaders: "*",
// };

// app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//   res.send("Server is running...");
// });

// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);
// app.use("/api/post-categories", postCategoriesRoutes);

// // static assets
// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// app.use(invalidPathHandler);
// app.use(errorResponserHandler);

// cb(null, path.join(__dirname, "../uploads"));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


// import express from 'express';
// import dotenv from 'dotenv';
// import path from 'path';
// import connectDB from './config/db.js';
// import cors from 'cors';
// import { errorResponserHandler, invalidPathHandler } from './middleware/errorHandler.js';
// import userRoutes from './routes/userRoutes.js';
// import postRoutes from './routes/postRoutes.js';
// import commentRoutes from './routes/commentRoutes.js';
// import postCategoriesRoutes from './routes/postCategoriesRoutes.js';
// import { fileURLToPath } from 'url';
// import multer from 'multer'; // Make sure you have multer for handling file uploads

// // Setup __dirname manually for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// dotenv.config();
// connectDB();

// const app = express();
// app.use(express.json());


// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// });

// // CORS setup
// const corsOptions = {
//   exposedHeaders: "*",
// };
// app.use(cors(corsOptions));

// // Routes
// app.get('/', (req, res) => {
//   res.send('Server is running...');
// });

// app.use('/api/users', userRoutes);
// app.use('/api/posts', postRoutes);
// app.use('/api/comments', commentRoutes);
// app.use('/api/post-categories', postCategoriesRoutes);

// // Static assets
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// // File upload middleware setup using multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, path.join(__dirname, '../uploads')); // Correct use of __dirname for file destination
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Ensures unique filenames
//   }
// });

// const upload = multer({ storage: storage });

// // Example upload route (adjust as per your need)
// app.post('/upload', upload.single('file'), (req, res) => {
//   res.send('File uploaded successfully!');
// });

// // Error handling
// app.use(invalidPathHandler);
// app.use(errorResponserHandler);

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));



import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './config/db.js';
import cors from 'cors';
import { errorResponserHandler, invalidPathHandler } from './middleware/errorHandler.js';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';
import commentRoutes from './routes/commentRoutes.js';
import postCategoriesRoutes from './routes/postCategoriesRoutes.js';
import { fileURLToPath } from 'url';

// Setup __dirname manually for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// CORS setup
const corsOptions = {
  exposedHeaders: "*",
};
app.use(cors(corsOptions));

// Routes
app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/post-categories', postCategoriesRoutes);

// Error handling
app.use(invalidPathHandler);
app.use(errorResponserHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));