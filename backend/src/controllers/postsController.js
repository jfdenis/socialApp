const Post = require('../models/Posts');
const postCtrl = {};

postCtrl.getPosts = async (req, res) => {
    const posts = await Post.find();
    res.send(posts)
};

module.exports = postCtrl;

