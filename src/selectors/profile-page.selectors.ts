import {Selector} from "testcafe";

export const ProfilePageSelectors = {
    cssSelectors: {
        pageProfileContainer: Selector(".profile-page"),
        profileName: Selector('div.description').nth(0),
        profileEmail: Selector('div.description').nth(1),
        profilePassword: Selector('div.description').nth(2),
        profilePhone: Selector('div.description').nth(3),
        profileAddress: Selector('div.description').nth(4),
        profileSupportPin: Selector('div.description').nth(5),
        profileNewsLetter: Selector('div.description').nth(6),
    }
};