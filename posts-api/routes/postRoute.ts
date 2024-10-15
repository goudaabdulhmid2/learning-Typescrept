import { Router, Request, Response } from "express";
import Post from "../models/post";
import CreatePostDto from "../dtos/createe-post.dto";

const router = Router();

const posts: Post[] = [
  {
    id: 1,
    title: "Post 1",
    body: "about post 1",
  },
  {
    id: 2,
    title: "Post 2",
    body: "about post 2",
  },
];

// Get all post
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    result: posts.length,
    data: {
      posts,
    },
  });
});

// Create
router.post("/", (req: Request, res: Response) => {
  const { title, body } = <CreatePostDto>req.body;

  const newPost = new Post(title, body);

  posts.push(newPost);

  res.status(201).json({
    status: "success",
    data: {
      newPost,
    },
  });
});

export default router;
