const validateEmail = (email) => {
  const regex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (regex.test(email)) {
    return null;
  }
  return "Invalid email address!";
};

export default validateEmail;
