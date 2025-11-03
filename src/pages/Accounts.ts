import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";
import {AccountsData} from "../data/dynamic/Accounts.data";

export class Accounts extends BasePage {
    constructor(page: Page) {
        super(page);
    }
    private newAccountButton: Locator = this.page.locator('button[title="New"]');

}