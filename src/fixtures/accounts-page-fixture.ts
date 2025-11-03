import {test as base} from "@playwright/test";
import {Accounts} from "../pages/Accounts";


export const test = base.extend<{accountsPage: Accounts}>({
    accountsPage: async ({page}, use) => {
        const accountsPage = new Accounts(page);
        await use(accountsPage);
    }
});

export {expect} from "@playwright/test";