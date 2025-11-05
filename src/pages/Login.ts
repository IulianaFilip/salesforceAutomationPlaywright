import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import * as dotenv from "dotenv";
dotenv.config();

import { users, DEFAULT_BASE_URL } from "../../lib/utils/constants";

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private userInput: Locator = this.page.locator("input#username");
  private passwordInput: Locator = this.page.locator("input#password");

  async loginAsUser(user: string) {
    if (!process.env.PASSWORD) {
      throw new Error("PASSWORD environment variable is not set");
    }
    await this.userInput.fill(user);
    await this.passwordInput.fill(process.env.PASSWORD);
    await this.passwordInput.press("Enter");
  }
}
