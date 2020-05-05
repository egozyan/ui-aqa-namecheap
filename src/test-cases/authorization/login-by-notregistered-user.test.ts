import {authLogin, clickLoginButton} from "../../helpers/auth-helper.func";
import {AuthorizationPageSelectors} from "../../selectors/authorization-page.selectors";
import {HOME_PAGE_URL} from "../../constants/url-const";

fixture `Log in the system by not registered user`
    .page(HOME_PAGE_URL);

test('', async t => {
    const invalidEmail = 'ssls.automation+666@gmail.com';
    const invalidPass = '123456';
    await authLogin(t, invalidEmail, invalidPass);
    const text = await AuthorizationPageSelectors.cssSelectors.enterPasswordField.getAttribute('type');
    await t
        .expect(text)
        .eql('text', 'Text value should be displayed');
        await clickLoginButton(t);
    await t
        .expect(AuthorizationPageSelectors.cssSelectors.pageAuthorizationContainer)
        .ok()
        .expect(AuthorizationPageSelectors.cssSelectors.errorMessage.exists)
        .ok('Error message should be displayed')
        .expect(AuthorizationPageSelectors.cssSelectors.errorMessage.innerText)
        .contains('Uh oh! Email or password is incorrect', 'Error text should be displayed')
});
