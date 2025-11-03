import {expect, Locator, Page} from '@playwright/test';

export class BasePage {
    protected saveButton: Locator;
    newButton: Locator;
    commentsTextbox: Locator;
    submitButton: Locator;
    nextButton: Locator;
    finishButton: Locator;
    deleteButton: Locator;
    message: Locator;
    actionButtton: Locator;

  


    constructor(readonly page: Page) {
        this.saveButton = page.locator('button, {name: "Save", exact: true}');
        this.newButton = page.locator('button, {name: "New", exact: true}');
        this.commentsTextbox = page.locator('textarea, {name: "Comments"}');
        this.submitButton = page.locator('button, {name: "Submit", exact: true}');
        this.nextButton = page.locator('button, {name: "Next", exact: true}');
        this.finishButton = page.locator('button, {name: "Finish", exact: true}');
        this.deleteButton = page.locator('button, {name: "Delete", exact: true}');
        this.message = page.locator('span.toastMesaage');
        this.deleteButton = page.locator('button, {name: "Delete", exact: true}');
        this.actionButtton = page.locator('button, {name: "Show more actions"}');

    }

    public fieldCombobox = (fieldName: string) => {
        return this.page.getByRole('combobox', {name: fieldName, exact: true});
    };

    async clickSaveButton() {
        await this.saveButton.click();
    }

    async clickNewButton() {
        await this.newButton.click();
    }

    async enterComments(comments: string) {
        await this.commentsTextbox.fill(comments);
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

    async clickNextButton() {
        await this.nextButton.click();
    }



}