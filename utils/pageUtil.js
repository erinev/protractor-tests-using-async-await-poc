const until = protractor.ExpectedConditions;
const defaultTimeoutInMs = 5000;

module.exports = class PageUtil {

    waitUntilVisibilityOf(elementToBeVisible) {
        return browser.driver.wait(until.visibilityOf(elementToBeVisible), defaultTimeoutInMs);
    };

    switchToIframe(iframeElement) {
        return browser.switchTo().frame(iframeElement.getWebElement());
    }
}
