module.exports = class BasePage {

    init() {
        browser.waitForAngularEnabled(false);
    }

    open(url) {
        return browser.get(url);
    }

    getTitle() {
        return browser.driver.getTitle();
    }
}
