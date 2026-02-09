const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
      get phoneInput() {
          return $('//android.widget.EditText[@resource-id="phoneInput"]');
      }

      get passwordInput() {
          return $('//android.widget.EditText[@resource-id="passwordInput"]');
      }

      get loginButton() {
          return $('//android.view.ViewGroup[@resource-id="loginButton"]');
      }

      async login(phone, password) {
        await driver.pause(3000);
        await this.phoneInput.waitForDisplayed({ timeout: 20000 });
        await this.phoneInput.click();
        await this.phoneInput.setValue(phone);


        await this.passwordInput.waitForDisplayed({timeout:10000});
        await this.passwordInput.click();
        await this.passwordInput.setValue(password);

        try {
           await driver.hideKeyboard();
        } catch (e) {
          // keyboard not present -sade to ignore
        }

        await this.loginButton.waitForDisplayed({timeout:10000});
        await this.loginButton.click();
      }
}

module.exports = new LoginPage();
