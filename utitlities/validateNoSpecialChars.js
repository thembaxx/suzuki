const validateNoSpecialChars = (value) => {
  const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;
  return regex.test(value) ? "Special characters not allowed!" : null;
};

export default validateNoSpecialChars;
