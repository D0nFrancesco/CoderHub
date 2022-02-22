const Post = require('../models/postModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const getPosts = asyncHandler(async(req, res) => {
    const posts = await Post.find({ user: req.user.id });
    res.status(200).json(posts);
});

const setPost = asyncHandler(async(req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field");
    }
    const post = await Post.create({
        text: req.body.text,
        user: req.user.id,
    });
    res.status(201).json(post);
});

const updatePost = asyncHandler(async(req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        res.status(400);
        throw new Error("Post not found");
    }
    if (!req.user) {
        res.status(401);
        throw new Error("User not found");
    }
    if (post.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json(updatedPost);
});

const deletePost = asyncHandler(async(req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        res.status(400);
        throw new Error("Post not found");
    }
    if (!req.user) {
        res.status(401)
        throw new Error("User not found")
    }
    if (post.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("User not authorized");
    }
    post.remove();
    res.status(200).json({ id: req.params.id });
});

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost
};