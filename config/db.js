const { Sequelize } = require("sequelize");

const { DB_USER, DB_NAME, DB_PORT, DB_SERVER, DB_PWD } = process.env;

const conString = `mysql://${DB_USER}${
  DB_PWD && `:${DB_PWD}`
}@${DB_SERVER}:${DB_PORT}/${DB_NAME}`;

const seq = Sequelize(conString);

seq
  .authenticate()
  .then(() => {
    console.log("todo OK");
  })
  .catch((e) => {
    console.error(e.message);
  });

module.exports = seq;
