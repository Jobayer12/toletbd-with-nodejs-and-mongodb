const isEmail = email => {
  let reqEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (email.match(reqEx)) return true;
  else return false;
};

const isEmpty = string => {
  if (string.trim() === "") return true;
  else return false;
};

const vaidationSignUp = newuser => {
  let errors = {};
  if (isEmpty(newuser.email)) {
    errors.email = "email can not be empty";
  } else if (!isEmail(newuser.email)) {
    errors.email = "Must be a valid email address";
  }

  if (newuser.password.length <= 8)
    errors.password = "Password atleast 8 character";
  if (isEmpty(newuser.password)) errors.password = "password can not be empty";

  if (isEmpty(newuser.confirmPassword))
    errors.confirmPassword = "confirm password can not be empty";
  if (newuser.password !== newuser.confirmPassword)
    errors.confirmPassword = "password not match";

  if (isEmpty(newuser.firstname))
    errors.firstname = "firstname can not be empty";
  if (isEmpty(newuser.lastname)) errors.lastname = "lastname can not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};

module.exports = {
  vaidationSignUp
};
