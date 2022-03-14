const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "ec2-44-194-112-166.compute-1.amazonaws.com",

  username: "exkzvghjnclong",

  password: "1f9eeccf26bbb6c9171fb73c419ce6207fb972720641b8a7883046e39c5b28ba",

  port: 5432,

  database: "d2fplmju8hqluj",

  dialect: "postgres",

  dialectOptions: {
    ssl: {
      require: true,

      rejectUnauthorized: false
    }
  }
});

module.exports = { sequelize };
