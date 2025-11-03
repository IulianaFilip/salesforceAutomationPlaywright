import { mergeTests } from "@playwright/test";
import {test as pageFixtures} from './page.fixtures';
import {test as dateFixtures} from './data.fixtures';

export const test = mergeTests(pageFixtures, dateFixtures);
export {expect} from "@playwright/test";