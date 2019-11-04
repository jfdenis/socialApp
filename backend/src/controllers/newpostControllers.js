/*
Here we can edit the function of post route, where indicates what is in the page and what it does

We only need to require the title, author and description from the body

*/

const Post = require('../models/Posts');

const post =  async (req, res) => {
    const { author, title, description } = req.body;

    const post = new Post ({
        author,
        title,
        description
    });

    console.log(post);
    await post.save()
    res.json({message: 'post saved'})
}

module.exports = post;