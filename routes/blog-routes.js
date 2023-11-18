import express from "express";
import { addBlog, deleteBlog, getAllBlogs, getById, getUserBlogs, updateBlog } from "../controllers/blog-controller";

const blogRoute= express.Router()

blogRoute.get("/", getAllBlogs);
blogRoute.post("/add", addBlog);
blogRoute.put("/update/:id", updateBlog)
blogRoute.get("/:id", getById);
blogRoute.delete("/:id", deleteBlog);
blogRoute.get("/user/:id", getUserBlogs)

export default blogRoute