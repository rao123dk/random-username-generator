# @rao123dk/random-username-generator

A utility to generate a unique/distinctive username using either an email address, randomly picked nouns and adjectives, or country-based names. Users have the option to insert a separator in the username, set the maximum length, and include up to six random digits.

## Install

```sh
npm i @rao123dk/random-username-generator --save

yarn add @rao123dk/random-username-generator
```

# Uses

```javascript
const {
  generateRandomUsername,
} = require("@rao123dk/random-username-generator");
```

### Generate randome username by email

```javascript
const {
  generateRandomUsername,
} = require("@rao123dk/random-username-generator");

generateRandomUsername({ email: "javascriptkingdom@gmail.com" });

Output: -javascriptkingdom;
```

### Generate random username

```javascript
const {
  generateRandomUsername,
} = require("@rao123dk/random-username-generator");

generateRandomUsername();
Output: -Groot - qualified942;
```

### Generate random username with separator

```javascript
const {
  generateRandomUsername,
} = require("@rao123dk/random-username-generator");

generateRandomUsername({ separator: "_" });
Output: -nasty_Ultron498;
```

### Generates username with separator and random Digits

```javascript
const {
  generateRandomUsername,
} = require("@rao123dk/random-username-generator");

generateRandomUsername({
  randomDigits: 4,
  separator: "_",
});
Output: -Clark_Doomsday7;
```
