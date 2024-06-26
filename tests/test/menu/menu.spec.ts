import { expect } from '@playwright/test';
import { test } from './menu.fixture';

test('has text new-releases', async ({ heroPage }) => {
  await heroPage.goto();
  await heroPage.checkText(heroPage.newReleasesMenuTab, 'NEW RELEASES');
});

test('has text men', async ({ heroPage }) => {
  await heroPage.goto();
  await heroPage.checkText(heroPage.menMenuTab, 'MEN');
});

test('has text women', async ({ heroPage }) => {
  await heroPage.goto();
  await heroPage.checkText(heroPage.womenMenuTab, 'WOMEN');
});

test('has text kids', async ({ heroPage }) => {
  await heroPage.goto();
  await heroPage.checkText(heroPage.kidsMenuTab, 'KIDS');
});

test('has text customize', async ({ heroPage }) => {
  await heroPage.goto();
  await heroPage.checkText(heroPage.customizeMenuTab, 'CUSTOMIZE');
});

test('has url new-releases', async ({ heroPage }) => {
  await heroPage.goto();
  await heroPage.checkUrl(heroPage.newReleasesMenuTab, '/new-releases');
});

test('has url men', async ({ heroPage }) => {
  await heroPage.goto();
  await heroPage.checkUrl(heroPage.menMenuTab, '/men');
});

test('has url women', async ({ heroPage }) => {
  await heroPage.goto();
  await heroPage.checkUrl(heroPage.womenMenuTab, '/women');
});

test('has url kids', async ({ heroPage }) => {
  await heroPage.goto();
  await heroPage.checkUrl(heroPage.kidsMenuTab, '/kids');
});

test('has url customize', async ({ heroPage }) => {
  await heroPage.goto();
  await heroPage.checkUrl(heroPage.customizeMenuTab, '/customize');
});
