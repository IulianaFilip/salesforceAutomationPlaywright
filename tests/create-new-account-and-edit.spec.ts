import { test, expect } from "../src/fixtures";
import { users } from "../lib/utils/constants";
import { Given, When, Then } from "../lib/annotations";

test.describe("Create New Account and Edit", () => {
  test("should create a new account and edit its details", async ({
    loginPage,
    accountsPage,
  }) => {
    await Given("the user is logged in", async () => {
      await loginPage.loginAsUser(users.admin);
    });
  });
});
