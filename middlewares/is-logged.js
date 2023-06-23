const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

const isLogged = (req, res, next) => {
  try {
    let token = req.cookies.auth;
    if (token) {
      let { data } = jwt.verify(token, jwtSecret);
      req.userId = data.id;
      req.userRole = data.role;
    } else {
      console.log("log mid else block");
      return res.status(401).json({ massage: "unauthorize user" });
    }
    next();
  } catch (error) {
    console.log("log mid else block");

    return res.status(401).json({ massage: "unauthorize user" });
  }
};

module.exports = isLogged;
