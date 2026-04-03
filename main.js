const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";

function generatePassword(length) {
  const randomizedChars = CHARACTERS.split("").sort(() => 0.5 - Math.random());
  return randomizedChars.slice(0, length).join("");
}

const password = generatePassword(12);
console.log("Generated password: " + password);
