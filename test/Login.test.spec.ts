import { expect, test } from "@playwright/test";
import LoginPage from "../page/Login.page";
import ProductsPage from "../page/Products.page";
import * as users from "../data/credentials.json";

test.describe("Login Feature @login", () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page, baseURL }) => {
        loginPage = new LoginPage(page);
        await page.goto(baseURL || "https://www.saucedemo.com/");
    });

    /*
     Лайвкодинг-задача (приоритет 1):
     - Добавь общий setup в beforeEach: открыть baseURL и инициализировать LoginPage.
     - Используй данные из data/credentials.json.
     - Для позитивных кейсов проверь, что пользователь попал на страницу Products.
     - Для негативных кейсов проверь точный текст ошибки на форме логина.
    */

    // Задание: залогиниться под users.standard и проверить заголовок/хедер "Products".
    test("Позитивный: standard user логинится с корректными данными.", async ({ page }) => {
        await loginPage.enterUsername(users.standard.username);
        await loginPage.enterPassword(users.standard.password);
        await loginPage.clickLoginButon();

        const productsPage = new ProductsPage(page);
        expect(await productsPage.getTitle).toBe("Products");
    });
    // Задание: залогиниться под users.problem и проверить заголовок/хедер "Products".
    test.skip("Позитивный: problem user логинится с корректными данными.", async () => {
        // TODO: реализовать во время лайвкодинга.
    });
    // Задание: залогиниться под users.performance и проверить заголовок/хедер "Products".
    test.skip("Позитивный: performance user логинится с корректными данными.", async () => {
        // TODO: реализовать во время лайвкодинга.
    });
    // Задание: отправить пустые username/password и проверить точный текст: "Epic sadface: Username is required".
    test.skip("Негативный: пользователь пытается войти без credentials.", async () => {
        // TODO: реализовать во время лайвкодинга.
    });
    // Задание: отправить валидный username + пустой password и проверить точный текст: "Epic sadface: Password is required".
    test.skip("Негативный: пользователь пытается войти без password.", async () => {
        // TODO: реализовать во время лайвкодинга.
    });
    // Задание: отправить пустой username + валидный password и проверить точный текст: "Epic sadface: Username is required".
    test.skip("Негативный: пользователь пытается войти без username.", async () => {
        // TODO: реализовать во время лайвкодинга.
    });
});
