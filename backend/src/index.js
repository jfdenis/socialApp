/*

This is the main file for the project, here node run all aour routes,  settinfs, databse.

here import the app.js file

*/
// Server Initialization
require('dotenv').config();
require('./database');
const app = require('./app');

const main = () => {
    app.listen(app.get('port'), () => {
        console.log(`Server on port ${app.get('port')}`);
    });
}

main()