import {authLogin, clickLoginButton} from "../../helpers/auth-helper.func";
import {AuthorizationPageSelectors} from "../../selectors/authorization-page.selectors";
import {HOME_PAGE_URL} from "../../constants/url-const";
import {HomePageSelectors} from "../../selectors/home-page.selectors";

fixture `Log in the system by registered user`
    .page(HOME_PAGE_URL);

test('', async t => {
    const validEmail = 'ssls.automation+666@gmail.com';
    const validPass = '123456';
    await authLogin(t, validEmail, validPass);
    const text = await AuthorizationPageSelectors.cssSelectors.enterPasswordField.getAttribute('type');
    await t
        .expect(text)
        .eql('text', 'Text value should be displayed');
    await clickLoginButton(t);
    await t
        .expect(HomePageSelectors.cssSelectors.pageHomeContainer)
        .ok()
        .expect(HomePageSelectors.cssSelectors.emailToolBar.exists)
        .ok('Email toolbar should be displayed');
    const emailFromToolBar = await HomePageSelectors.cssSelectors.emailToolBar.innerText;
    await t
        .expect(emailFromToolBar.toLowerCase())
        .contains(validEmail, 'Email should be displayed')
        .expect(HomePageSelectors.cssSelectors.emailDropDownMenu.exists)
        .ok('Email dropdown menu should be displayed')
        .click(HomePageSelectors.cssSelectors.emailDropDownMenu)
        .expect(HomePageSelectors.cssSelectors.dropdownNavigationBar.exists)
        .ok('Dropdown navigation bar should be displayed')
});
