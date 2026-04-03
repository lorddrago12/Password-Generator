# 🔐 Password Generator

A lightweight, fast, and dependency-free JavaScript password generator that creates secure, randomized passwords using a shuffled character pool.

---

## ✨ Features

- Generates passwords from a rich character set: uppercase, lowercase, digits, and special characters
- Randomized character pool on every call — no predictable patterns
- Configurable password length
- Zero dependencies — pure vanilla JavaScript

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/lorddrago12/Password-Generator.git
cd Password-Generator
```

---

## 🚀 Usage

```js
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*().";

function generatePassword(length) {
  const randomizedChars = CHARACTERS.split("").sort(() => 0.5 - Math.random());
  return randomizedChars.slice(0, length).join("");
}

const password = generatePassword(12);
console.log("Generated password: " + password);
```

### Output Example

```
Generated password: kR3$mZ!9wXqP
```

---

## ⚙️ How It Works

| Step | Description |
|------|-------------|
| 1 | The character pool string is split into an array |
| 2 | The array is shuffled using a random comparator via `.sort()` |
| 3 | The first `n` characters (based on the desired `length`) are sliced |
| 4 | The slice is joined back into a string and returned as the password |

---

## 🛠️ Customization

You can tweak the `CHARACTERS` constant to restrict or expand the character set:

```js
// Numbers only
const CHARACTERS = "0123456789";

// Alphanumeric only (no special chars)
const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
```

---

## 📁 Project Structure

```
Password-Generator/
└── index.js       # Core password generation logic
└── README.md      # Project documentation
```

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request

---

> Made with ❤️ by [lorddrago12](https://github.com/lorddrago12)
