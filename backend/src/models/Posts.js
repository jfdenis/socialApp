/*
Post model define how our posts has to be added to the server, 
how the client has to send the information

*/

const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imgPath: {
        type: String,
        
    },
}, {
    timestamps: true
});

module.exports = model('posts', postSchema);