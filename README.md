# 📱 Mobile Automation – Login Flow (Appium)

## 📌 Objective
Automate the **Login workflow** of a mobile application using **Appium** on an **Android Emulator**, following industry best practices such as Page Object Model (POM).

---

## 🛠️ Tech Stack
- **Automation Tool:** Appium (v3)
- **Language:** JavaScript
- **Framework:** WebdriverIO
- **Test Runner:** Mocha
- **Design Pattern:** Page Object Model (POM)
- **Platform:** Android Emulator
- **App Type:** React Native (Native Android)

---

## 📂 Project Structure
```
mobile-automation/
│
├── apps/
│ └── app.apk
│
├── test/
│ ├── pageobjects/
│ │ └── login.page.js
│ │
│ └── specs/
│ └── login.test.js
│
├── wdio.conf.js
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites
- Node.js (LTS)
- Java JDK (8+)
- Android Studio
- Android Emulator (Android 12+ recommended)
- Appium v3

Verify setup:
- node -v
- adb devices
- appium -v
____
▶️ Run Tests

1. Start Android Emulator from Android Studio → Device Manager
2. Run: appium
3. Run: npx wdio run wdio.conf.js (open in new Terminal)
______
🧪 Test Coverage

- App launch validation
- Phone number input
- Password input
- Login button interaction
- Successful login flow execution

____
## Allure report output 
<img width="1772" height="838" alt="image" src="https://github.com/user-attachments/assets/62d1ea10-4ebb-43bc-a358-379a8eb0f4b5" />
