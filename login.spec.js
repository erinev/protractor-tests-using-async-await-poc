const LoginPageObject = require('./pageObjects/loginPage');
const LoginPage = new LoginPageObject();

describe('Login page', function() {
    
    beforeAll(async function() {
        LoginPage.init();

        await LoginPage.open();
    });

    beforeEach(async function() {});

    afterEach(async function() {
        await LoginPage.switchToDefaultContent();
    });

    afterAll(async function() {});

    it('should open', async function() {
        const pageTitle = await LoginPage.getTitle();

        expect(pageTitle).toEqual('id.adform.com');
    });

    it('should show advertisement banner', async function() {   
        await LoginPage.switchToBannerIframeContent();

        const bannerImageStyleAttribute = await LoginPage.bannerImage.getAttribute('style');

        expect(bannerImageStyleAttribute).toContain('background-image: url(');
    });
});
