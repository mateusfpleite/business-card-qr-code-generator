require('dotenv').config();
const App = require('./app');
const { config } = require('./database/models');

const port = process.env.APP_PORT || 3001;

App.listen(port, () => console.log('ouvindo porta', port));
