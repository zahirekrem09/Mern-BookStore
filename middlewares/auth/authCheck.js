const jwt = require("jsonwebtoken");

const authCheck = (req, res, next) => {
  //TODO1: Check for token
  const token = req.header("x-auth-token");
  //console.log(token);
  if (!token) {
    return res
      .status(401)
      .json({ errors: [{ message: "No token, authorization denied" }] });
  }
  try {
    //TODO2: Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // Add user from payload
    req.user = decoded;
    //console.log(decoded);
    next();
  } catch (e) {
    return res
      .status(400)
      .json({ errors: [{ message: "Token is not valid" }] });
  }
};

module.exports = authCheck;
