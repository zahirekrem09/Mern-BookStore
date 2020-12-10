const authRegister = (req, res) => {
  res.send("Register");
};

const authLogin = (req, res) => {
  res.send("Login");
};

module.exports = {
  authRegister,
  authLogin,
};
