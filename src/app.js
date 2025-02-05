import express from 'express';
import cors from 'cors'; // For handling CORS (Cross-Origin Resource Sharing)
import cookieParser from 'cookie-parser'; // For parsing cookies
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, // Set allowed origins dynamically
    credentials: true,  // Allow credentials like cookies
}));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json({ limit: '16kb' })); // Limit body size for JSON requests
app.use(express.urlencoded({ extended: true, limit: '16kb' })); // Limit body size for URL-encoded form data

// Middleware for serving static files (e.g., images, CSS)
app.use(express.static('public'));

// Middleware for parsing cookies
app.use(cookieParser());

// Import user routes
import userRouter from './routes/user.routes.js';

// Routes
app.use('/api/v1/user', userRouter);

export { app };
