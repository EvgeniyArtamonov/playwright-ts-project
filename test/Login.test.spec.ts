import { expect, test } from '@playwright/test';
import LoginPage from '../page/Login.page';
import ProductsPage from '../page/Products.page';

test.describe('Login Feature @login', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page, baseURL }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await page.goto(baseURL || 'https://www.saucedemo.com/');
  });

  // Задание: залогиниться под users.standard и проверить заголовок/хедер "Products".
  test('Позитивный: standard user логинится с корректными данными.', async () => {
    await loginPage.clickLoginButon();

    expect(await productsPage.getTitle).toBe('Products');
  });
  // Задание: залогиниться под users.problem и проверить заголовок/хедер "Products".
  test.skip('Позитивный: problem user логинится с корректными данными.', async () => {
    // TODO
  });
  // Задание: залогиниться под users.performance и проверить заголовок/хедер "Products".
  test.skip('Позитивный: performance user логинится с корректными данными.', async () => {
    // TODO
  });
  // Задание: отправить пустые username/password и проверить точный текст: "Epic sadface: Username is required".
  test.skip('Негативный: пользователь пытается войти без credentials.', async () => {
    // TODO
  });
  // Задание: отправить валидный username + пустой password и проверить точный текст: "Epic sadface: Password is required".
  test.skip('Негативный: пользователь пытается войти без password.', async () => {
    // TODO
  });
  // Задание: отправить пустой username + валидный password и проверить точный текст: "Epic sadface: Username is required".
  test.skip('Негативный: пользователь пытается войти без username.', async () => {
    // TODO
  });
});
