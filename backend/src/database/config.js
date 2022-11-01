const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });
dotenv.config();

module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DB_NAME,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.MYSQL_DB_NAME,
    "host": process.env.MYSQL_HOST,
    "dialect": "mysql"
  }
}
