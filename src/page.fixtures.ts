import { mergeTests } from "@playwright/test";

import { test as loginPage} from "./fixtures/login.fixture";
import { test as accountsPage} from "./fixtures/accounts-page-fixture";


export const test = mergeTests(loginPage, accountsPage);
export {expect} from "@playwright/test";