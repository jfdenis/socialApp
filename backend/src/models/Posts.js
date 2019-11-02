const {Schema, model} = require('mongoose');

const postSchema = new Schema({
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