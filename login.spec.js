const PageUtilObject = require('./utils/pageUtil');
const PageUtil = new PageUtilObject();
const LoginPageObject = require('./pageObjects/loginPage');
const LoginPage = new LoginPageObject();

describe('Login page', function() {
    
    beforeAll(async function() {
        LoginPage.init();

        await LoginPage.open();
    });

    beforeEach(async function() {});

    afterEach(async function() {
        await PageUtil.closeAllTabsExceptFirst();

        await LoginPage.open();
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

    it('should open forgot password form', async function() {   
        await LoginPage.clickForgotPasswordLink();

        const currentUrl = await PageUtil.getCurrentUrl();

        expect(currentUrl).toContain('/sts/ForgotPassword?signin=');
    });

    it('should return to login page after forgot form is cancelled', async function() {   
        await LoginPage.clickForgotPasswordLink();

        await LoginPage.clickForgotPasswordFormCancelButton();

        const currentUrl = await PageUtil.getCurrentUrl();

        expect(currentUrl).toContain('/sts/login?signin=');
    });
});
