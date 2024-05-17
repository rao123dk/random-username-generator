const {
  generateUniqueRandomNumber,
  usernameAtMaxlength,
  usernameFromEmail,
  returnRandomString,
} = require("./utils");
const data = require("./data/index");

const generateByMachineMind = (separator) => {
  if (separator) {
    return `${returnRandomString(data)}${separator}${returnRandomString(data)}${generateUniqueRandomNumber(3)}`;
  }
  return `${returnRandomString(data)}${returnRandomString(data)}${generateUniqueRandomNumber(3)}`;
};

const generateRandomUsername = (options) => {
  const { email, separator, maxLength, randomDigits, prefix } = options || {};
  const maxLengthSys = maxLength || 15;
  let userName = "";

  if (!options || Object.keys(options).length === 0) {
    return generateByMachineMind("-");
  }
  if (email) {
    userName = usernameFromEmail(email);
  }
  if (separator) {
    userName = generateByMachineMind(separator);
  }

  if (randomDigits && userName) {
    const num = generateUniqueRandomNumber(randomDigits);
    userName = `${userName}${separator || ""}${num}`;
  } else if (randomDigits) {
    const num = generateUniqueRandomNumber(randomDigits);
    userName = `${generateByMachineMind(prefix || "-")}${num}`;
  }
  if (prefix && !randomDigits) {
    userName = `${prefix}${userName}`;
  }

  if (maxLengthSys) {
    userName = usernameAtMaxlength(userName, maxLengthSys, email, randomDigits);
  }
  return userName;
};

console.log(
  generateRandomUsername({
    randomDigits: 4,
    separator: "_",
  }),
);

module.exports = { generateRandomUsername };
