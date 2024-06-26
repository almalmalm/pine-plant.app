import { test as base } from '@playwright/test';
import { HeroPage } from '../../pageObjets/HeroPage';

type Fixtures = {
  heroPage: HeroPage;
};

export const test = base.extend<Fixtures>({
  heroPage: async ({ page }, use) => {
    const heroPage = new HeroPage(page);

    await use(heroPage);
  },
});
