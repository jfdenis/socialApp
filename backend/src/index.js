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