const Post = require('../models/postModel');

const getPosts = async(req, res) => {
    try {
        const posts = await Post.find({ user: req.user.id });

        res.status(200);
        res.json({
            message: 'successful',
            _posts: posts 
        });
        return res.end();
    }
    catch (err) {
        res.status(500);
        res.write(err);
        return res.end();
    }
}

const setPost = async(req, res) => {
    try {
        if(!req.body.text) {
            res.status(400);
            res.json({message: "Please add a text field"});
            return res.end();
        }
        const post = await Post.create({
            text: req.body.text,
            user: req.user.id,
        });
        res.status(201);
        res.json({
            message: 'successful',
            data: post
        });
        return res.end();
    }
    catch (err) {
        res.status(500);
        res.write(err);
        return res.end();
    }
}

const updatePost = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            res.status(400);
            res.json({message: 'Post not found'});
            return res.end();
        }
        if (!req.user) {
            res.status(401);
            res.json({message: 'forbidden, pls login'});
            return res.end();
        }
        if (post.user.toString() !== req.user.id) {
            res.status(401);
            res.json({message: "User not authorized"});
            return res.end();
        }
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200);
        res.json(updatedPost);
        return res.end();
    }
    catch(err) {
        res.status(500);
        res.write(err);
        return res.end();
    }
}

const deletePost = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
       
        if (!post) {
            res.status(400);
            res.json({message: 'Post not found'});
            return res.end();
        }
        if (!req.user) {
            res.status(401);
            res.json({message: 'Forbidden, pls login'});
            return res.end();
        }
        if (post.user.toString() !== req.user.id) {
            res.status(401);
            res.json({message: 'user not authorized'});
            return res.end();
        }
        post.remove();
        res.status(200);
        res.json({id: req.params.id});
        return res.end();
    }
    catch (err) {
        res.status(500);
        res.write(err);
        return res.end();
    }
}

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost
}