import {authLogin, clickLoginButton} from "../../helpers/auth-helper.func";
import {HOME_PAGE_URL} from "../../constants/url-const";
import {HomePageSelectors} from "../../selectors/home-page.selectors";
import {ProfilePageSelectors} from "../../selectors/profile-page.selectors";

fixture `Log in the system by registered user`
    .page(HOME_PAGE_URL)

test('', async t => {
    const validEmail = 'ssls.automation+666@gmail.com';
    const validPass = '123456';
    await authLogin(t, validEmail, validPass);
    await clickLoginButton(t);
    await t
        .click(HomePageSelectors.cssSelectors.emailDropDownMenu)
        .click(HomePageSelectors.cssSelectors.profileButton);

        const name = await ProfilePageSelectors.cssSelectors.profileName.innerText;
        const email = await ProfilePageSelectors.cssSelectors.profileEmail.innerText;
        const phone = await ProfilePageSelectors.cssSelectors.profilePhone.innerText;
        const address = await ProfilePageSelectors.cssSelectors.profileAddress.innerText;
        const supportPin = await ProfilePageSelectors.cssSelectors.profileSupportPin.innerText;
        const newsLetter = await ProfilePageSelectors.cssSelectors.profileNewsLetter.innerText;

    await t
        .click(HomePageSelectors.cssSelectors.emailDropDownMenu)
        .click(HomePageSelectors.cssSelectors.logOutButton);

    await authLogin(t, validEmail, validPass);
    await clickLoginButton(t);

    await t
        .click(HomePageSelectors.cssSelectors.emailDropDownMenu)
        .click(HomePageSelectors.cssSelectors.profileButton)
        .expect(ProfilePageSelectors.cssSelectors.pageProfileContainer)
        .ok()
        .expect(ProfilePageSelectors.cssSelectors.profileName.innerText)
        .contains(name, 'Name should be displayed')
        .expect(ProfilePageSelectors.cssSelectors.profileEmail.innerText)
        .contains(email, 'Email should be displayed')
        .expect(ProfilePageSelectors.cssSelectors.profilePassword.innerText)
        .ok('Password should not be empty')
        .expect(ProfilePageSelectors.cssSelectors.profilePhone.innerText)
        .contains(phone, 'Phone should be displayed')
        .expect(ProfilePageSelectors.cssSelectors.profileAddress.innerText)
        .contains(address, 'Address should be displayed')
        .expect(ProfilePageSelectors.cssSelectors.profileSupportPin.innerText)
        .contains(supportPin, 'Support Pin should be displayed')
        .expect(ProfilePageSelectors.cssSelectors.profileNewsLetter.innerText)
        .contains(newsLetter, 'Newsletter should be displayed')
});
