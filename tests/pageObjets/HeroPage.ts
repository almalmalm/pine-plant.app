import { expect, type Locator, type Page } from '@playwright/test';

export class HeroPage {
  readonly page: Page;
  readonly newReleasesMenuTab: Locator;
  readonly menMenuTab: Locator;
  readonly womenMenuTab: Locator;
  readonly kidsMenuTab: Locator;
  readonly customizeMenuTab: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newReleasesMenuTab = page.getByTestId('menu-tab-new-releases');
    this.menMenuTab = page.getByTestId('menu-tab-men');
    this.womenMenuTab = page.getByTestId('menu-tab-women');
    this.kidsMenuTab = page.getByTestId('menu-tab-kids');
    this.customizeMenuTab = page.getByTestId('menu-tab-customize');
  }

  async goto() {
    await this.page.goto('/hero');
  }

  async checkText(locator: Locator, text: string) {
    await expect(locator).toHaveText(text, { ignoreCase: true });
  }

  async checkUrl(locator: Locator, url: string) {
    await locator.click();
    await expect(this.page).toHaveURL(url);
  }
}
