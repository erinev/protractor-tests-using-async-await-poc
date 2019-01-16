const BasePage = require('./basePage');
const PageUtilObject = require('../utils/pageUtil');
const PageUtil = new PageUtilObject();

module.exports = class LoginPage extends BasePage {

    get bannerImage() { return element(by.css('div.image')); }
    get bannerIframe() { return element(by.tagName('iframe')); }
    get forgotPasswordLink() { return element(by.css('a.forgot-pass')); }
    get forgotPasswordSubmitButton() { return element(by.buttonText('Continue')); }
    get forgotPasswordCancelButton() { return element(by.linkText('Cancel')); }
    get loginButton() { return element(by.buttonText('Log in')); }

    async open() {
        await super.open('https://www.adform.com/passport');

        return PageUtil.waitUntilVisibilityOf(this.bannerIframe);
    }

    async switchToBannerIframeContent() {
        await PageUtil.waitUntilVisibilityOf(this.bannerIframe);
        await PageUtil.switchToIframe(this.bannerIframe);
        await PageUtil.waitUntilVisibilityOf(this.bannerIframe);
        return PageUtil.switchToIframe(this.bannerIframe);
    }

    switchToDefaultContent() {
        return browser.driver.switchTo().defaultContent();
    }

    async clickForgotPasswordLink() {
        await this.forgotPasswordLink.click();

        await PageUtil.waitUntilUrlDoesNotContain('/sts/login?signin=');

        return PageUtil.waitUntilVisibilityOf(this.forgotPasswordSubmitButton);
    }

    async clickForgotPasswordFormCancelButton() {
        await this.forgotPasswordCancelButton.click();

        await PageUtil.waitUntilUrlDoesNotContain('/sts/ForgotPassword?signin=');

        return PageUtil.waitUntilVisibilityOf(this.loginButton);
    }

    async enterUserNameAndSubmitForgotPasswordForm() {
        await this.forgotPasswordCancelButton.click();

        await PageUtil.waitUntilUrlDoesNotContain('/sts/ForgotPassword?signin=');

        return PageUtil.waitUntilVisibilityOf(this.loginButton);
    }
}
