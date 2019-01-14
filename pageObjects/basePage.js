module.exports = class BasePage {

    constructor() {
        this.title = 'BasePage';
    }

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
