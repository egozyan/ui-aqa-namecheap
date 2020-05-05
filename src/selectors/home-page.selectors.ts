import {Selector} from "testcafe";

export const HomePageSelectors = {
    cssSelectors: {
        pageHomeContainer: Selector(".ssls-home-page"),
        logIn: Selector('.ssls-toolbar__btn-text').nth(1),
        emailToolBar: Selector('span.ssls-toolbar__btn-text').nth(2),
        emailDropDownMenu: Selector('.ssls-dropdown').nth(1),
        dropdownNavigationBar: Selector('.ssls-header-dropdown-nav').nth(1),
        profileButton: Selector(".ssls-header-dropdown-nav li").nth(9),
        logOutButton: Selector('.ssls-header-dropdown-nav li').nth(12)
    }
};