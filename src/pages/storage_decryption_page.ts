import { type Page } from "puppeteer-core";

export class StorageDecryptionPage {
  private readonly page: Page;
  private readonly passwordInput = () => this.page.locator("#password");
  private readonly skipButton = () => this.page.locator("button::-p-text(Skip)");
  private readonly decryptButton = () => this.page.locator("button::-p-text(Decrypt)");

  constructor(page: Page) {
    this.page = page;
  }

  async decrypt(password: string) {
    await this.passwordInput().fill(password);
    await this.decryptButton().click();
  }

  async skip() {
    await this.decryptButton().click();
  }
}
