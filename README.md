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
download and add apk in apps folder (APK file path https://drive.google.com/file/d/1dAXyTS-qEVSVBjGZiLKxeixp_FnFwx9z/view?usp=sharing)
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
_____
## Video

https://drive.google.com/file/d/1AThVU3a6aGgKQ9L_YN4BfdIQy54_bHAF/view?usp=sharing
____
## Allure report output 
<img width="1772" height="838" alt="image" src="https://github.com/user-attachments/assets/62d1ea10-4ebb-43bc-a358-379a8eb0f4b5" />

____

## Output Log
```
Test Run Command:
npx wdio run wdio.conf.js

Platform: Android
Framework: WebdriverIO + Appium
App: app.apk

Spec Results:
--------------------------------------------------
My Login application
✓ should login with valid credentials

1 passing (15.9s)
Spec Files: 1 passed, 1 total (100%)
Session ID: ff50592b-8c6f-4487-bd41-7fec3c9e172b
--------------------------------------------------
```
____
## Notes:
- Appium service was started via WDIO Appium Service
- Android login flow automated using XPath locators
- Test executed successfully on real/emulator Android device
