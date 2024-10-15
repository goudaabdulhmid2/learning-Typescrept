import express from "express";
import postsRoute from "./routes/postRoute";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/posts", postsRoute);

// Run server
const PORT: number = 3000;
app.listen(PORT, (): void => {
  console.log(`server is running on port ${PORT}`);
});
