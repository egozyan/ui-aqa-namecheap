import {AuthorizationPageSelectors} from "../selectors/authorization-page.selectors";
import {HomePageSelectors} from "../selectors/home-page.selectors";

    export async function authLogin (t: TestController, email: string, password: string) {
        await t
            .expect(HomePageSelectors.cssSelectors.logIn.exists)
            .ok('LOG IN button should be displayed')
            .click(HomePageSelectors.cssSelectors.logIn)
            .expect(AuthorizationPageSelectors.cssSelectors.emailField.exists)
            .ok('Email field should be displayed')
            .typeText(AuthorizationPageSelectors.cssSelectors.emailField, email)
            .expect(AuthorizationPageSelectors.cssSelectors.enterPasswordField.exists)
            .ok('Password field should be displayed')
            .typeText(AuthorizationPageSelectors.cssSelectors.enterPasswordField, password)
            .expect(AuthorizationPageSelectors.cssSelectors.eyeIcon.exists)
            .ok('Eye icon should be displayed')
            .click(AuthorizationPageSelectors.cssSelectors.eyeIcon)
}

    export async function clickLoginButton (t: TestController) {
        await t
            .expect(AuthorizationPageSelectors.cssSelectors.logInButton.exists)
            .ok('LOGIN button should be displayed')
            .click(AuthorizationPageSelectors.cssSelectors.logInButton)
        }
