import {mergeTests} from "@playwright/test";

import {test as accountData} from "./fixtures/data/accounts-data-fixture";

export const test = mergeTests(accountData);
export {expect} from "@playwright/test";