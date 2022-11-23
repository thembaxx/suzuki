const removeSpecialChars = (value, removeSpaces = true) => {
  if (!value) return;
  if (removeSpaces) value = value.replace(/\s+/g, "");
  return value.replace(/[^a-z0-9,. ]/gi, "");
};

const validateZAPhoneNumber = (num) => {
  if (!num) return num;
  let str = removeSpecialChars(num.toString());
  str = str.replace(/\s/g, "");

  if (str.startsWith("+")) str.replace("+", " ");

  if (/[a-zA-Z]/.test(str)) return "Phone number cannot contain letters!";

  if (/[!@#$%^&*()_\-=[\]{};':"\\|,.<>/?]+/.test(str)) {
    return "Pnone number cannot contain special characters!";
  }

  if (str[0] === "0") str = "27" + str.slice(1);

  const regex = /^(\+?27|0)[1-8][0-9]{8}$/;
  const match = regex.test(str);
  return !match ? "Invalid phone number format!" : null;
};

export default validateZAPhoneNumber;
