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