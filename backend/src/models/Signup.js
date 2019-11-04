/*
Here we can edit the user schema, where indicates how the client has tu send 
the information to be saved in the database.

Here also configure the Bcrypt module in order to set our password in rare strings
and then compare the password of the clien and the password that we already have in
order to compare them.

*/

const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const signupSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    imgPath: {
        type: String
    }

});
 // Encriptación de la contraseña
signupSchema.methods.myencrypt = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

// Comparando la contraseña de la db con la que se recibe del cliente
signupSchema.methods.validatepassword = function(password){
    return bcrypt.compare(password, this.password);
};



module.exports = model('users', signupSchema);