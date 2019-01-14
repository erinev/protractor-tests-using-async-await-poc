const until = protractor.ExpectedConditions;
const defaultTimeoutInMs = 5000;

module.exports = class PageUtil {

    waitUntilVisibilityOf(element) {
        return browser.driver.wait(until.visibilityOf(element), defaultTimeoutInMs);
    };

    switchToIframe(iframeElement) {
        return browser.switchTo().frame(iframeElement.getWebElement());
    }
}
