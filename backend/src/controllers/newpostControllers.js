const Post = require('../models/Posts');

const post =  async (req, res) => {
    const { title, description } = req.body;

    const post = new Post ({
        title, description
    });

    console.log(post);
    await post.save()
    res.json({message: 'post saved'})
}

module.exports = post;