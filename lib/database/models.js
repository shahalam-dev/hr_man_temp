const connection = require("./connection");
const db = connection.db;

exports.models = {
  User: db.tblusermast,
  Department: db.tbldepartmentmast,
  Program: db.tblprogrammast,
  Level: db.tbllevelmast,
  ProgramConfig: db.tblprogramconfigmast,
  Agent: db.tblagent,
  AgentFile: db.tblagentfile,
};
