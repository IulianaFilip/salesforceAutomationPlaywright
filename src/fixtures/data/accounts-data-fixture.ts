import {test as base} from "@playwright/test";
import {AccountsData} from "../../data/dynamic/Accounts.data";


export const test = base.extend<{accountsData: AccountsData}>({
    accountsData: async ({page}, use) => {
        const accountsData = new AccountsData();
        await use(accountsData);
    }
});

export {expect} from "@playwright/test";