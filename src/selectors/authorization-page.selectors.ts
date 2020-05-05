import {Selector} from "testcafe";

export const AuthorizationPageSelectors = {
    cssSelectors: {
        pageAuthorizationContainer: Selector(".authorization-page"),
        emailField: Selector('div.row').nth(0),
        enterPasswordField: Selector('.form-control').nth(1),
        logInButton: Selector('button.btn.block.primary'),
        errorMessage: Selector('div.noty_message.message'),
        eyeIcon: Selector('button.btn-input.btn-input-block')
    }
};