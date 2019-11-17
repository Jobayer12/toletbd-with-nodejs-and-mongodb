const register = require("../Model/registration");
const { vaidationSignUp } = require("../validations/signup");
module.exports = (req, res) => {
  const User = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  };

  const { valid, errors } = vaidationSignUp(User);
  if (!valid) return res.status(400).json({ errors });

  register.findOne({ email: User.email }).then(result => {
    if (result && result !== "null" && result !== "undefined") {
      if (result.email === User.email) {
        return res.status(400).json({
          errors: {
            message: "email already exists"
          }
        });
      }
    }
  });

  const newUser = new register({
    email: User.email,
    password: User.password,
    firstname: User.firstname,
    lastname: User.lastname
  });

  newUser
    .save()
    .then(() => {})
    .catch(err => {
      console.log(err);
    });
};
