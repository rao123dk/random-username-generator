const crypto = require("crypto");

function randomRange({ min = 1, max }) {
  // TODO : implement crypto.randomInt later
  return crypto.randomInt(min, max + 1);
  // return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRangeSimple(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUniqueRandomNumber(numDigits) {
  if (numDigits <= 0 || numDigits > 10) {
    return 0;
  }
  let generatedNumber = "";
  const usedDigits = new Set();

  while (generatedNumber.length < numDigits) {
    let digit;
    do {
      digit = randomRange({ max: 10 }); // Generate random digit (0-9)
    } while (usedDigits.has(digit)); // Keep generating until a unique digit is found

    usedDigits.add(digit);
    generatedNumber += digit;
  }
  return Number(generatedNumber);
}

function usernameFromEmail(email) {
  const username = email.split("@")[0];
  const cleanuserName = username.replace(/[^a-zA-Z ]/g, "");
  return cleanuserName;
}

function usernameAtMaxlength(username, maxLength, email, randomDigits) {
  if (email && randomDigits) {
    const randomNumber = username.slice(-3);
    const countDigit = String(randomNumber).length;
    return (
      usernameFromEmail(email).slice(0, maxLength - countDigit) + randomNumber
    );
  }
  return username.slice(0, maxLength);
}

function returnRandomString(data) {
  const randomNumber = randomRange({ min: 1, max: 4 });
  const currentDataByMachine = data[randomNumber];
  const maxRange = currentDataByMachine.length - 1;
  const randomString =
    currentDataByMachine[randomRange({ min: 1, max: maxRange })];
  const strArr = randomString.split(" ");
  return (randomString && strArr.length) > 1
    ? strArr[randomRangeSimple(0, 1)]
    : randomString;
}
module.exports = {
  generateUniqueRandomNumber,
  usernameFromEmail,
  usernameAtMaxlength,
  randomRange,
  returnRandomString,
};
