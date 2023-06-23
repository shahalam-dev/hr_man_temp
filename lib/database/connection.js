const Sequelize = require("sequelize");

exports.db = require("../../models");
exports.operators = Sequelize.Op;
exports.sequelize = Sequelize;
