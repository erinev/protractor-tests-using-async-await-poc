const until = protractor.ExpectedConditions;
const defaultTimeoutInMs = 10000;

module.exports = class PageUtil {

    waitUntilVisibilityOf(element) {
        return browser.driver.wait(until.visibilityOf(element), defaultTimeoutInMs);
    };

    waitUntilUrlDoesNotContain(text) {
        const urlDoesNotContainText = until.not(until.urlContains(text), defaultTimeoutInMs);

        return browser.driver.wait(urlDoesNotContainText);
    }

    switchToIframe(iframeElement) {
        return browser.switchTo().frame(iframeElement.getWebElement());
    }

    getCurrentUrl() {
        return browser.driver.getCurrentUrl();
    }

    async focusOpenedTab(tabNumber) {
        const tabIndex = tabNumber - 1;
        
        const browserTabs = await browser.getAllWindowHandles();

        return browser.driver.switchTo().window(browserTabs[tabIndex]);
    }

    async closeAllTabsExceptFirst() {
        const firstTabIndex = 0;

        const browserTabs = await browser.getAllWindowHandles();

        if (browserTabs.length > 1) {
            for (let tabIndex = 1; tabIndex < browserTabs.length; tabIndex++) {
            
                await browser.driver.switchTo().window(browserTabs[tabIndex]);
                await browser.driver.close();
            }
        }

        return browser.driver.switchTo().window(browserTabs[firstTabIndex]);
    }
}
