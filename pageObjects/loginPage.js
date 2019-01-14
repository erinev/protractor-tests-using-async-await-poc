const BasePage = require('./basePage');
const PageUtilObject = require('../utils/pageUtil');
const PageUtil = new PageUtilObject();

module.exports = class LoginPage extends BasePage {

    get bannerImage() { return element(by.css('div.image')); }
    get bannerIframe() { return element(by.tagName('iframe')); }

    open() {
        return super.open('https://www.adform.com/passport');
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
}
