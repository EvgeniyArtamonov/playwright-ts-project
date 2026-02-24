import { expect, test } from "@playwright/test";
import LoginPage from "../page/Login.page";
import ProductsPage from "../page/Products.page";
import CartPage from "../page/Cart.page";
import * as users from "../data/credentials.json";

test.describe("Cart Feature @cart", () => {
    let productsPage: ProductsPage;

    test.beforeEach(async ({ page, baseURL }) => {
        const loginPage = new LoginPage(page);
        await page.goto(baseURL || "https://www.saucedemo.com/");
        await loginPage.enterUsername(users.standard.username);
        await loginPage.enterPassword(users.standard.password);
        await loginPage.clickLoginButon();
        productsPage = new ProductsPage(page);
        expect(await productsPage.getTitle).toBe("Products");
    });

    /*
     Лайвкодинг-задача (приоритет 2):
     - В beforeEach: залогинься как standard user и проверь, что открыта страница Products.
     - Используй Page Objects: LoginPage, ProductsPage и CartPage.
     - Пиши детерминированные проверки для badge, названия товара и заголовка страницы.
    */

    // Задание: добавить "backpack", проверить badge "1", открыть корзину, проверить "Your Cart" и товар "Sauce Labs Backpack".
    test("Позитивный: standard user добавляет 1 товар в корзину.", async ({ page }) => {
        await productsPage.addToCart("backpack");
        expect(await productsPage.getCartItemsAmount).toBe("1");

        await productsPage.navigateToCart();
        const cartPage = new CartPage(page);

        expect(await cartPage.getTitle).toBe("Your Cart");
        expect(await cartPage.getCartQuantity).toBe("1");
        expect(await cartPage.getItemName).toBe("Sauce Labs Backpack");
    });
    // Задание: добавить "backpack", проверить что текст кнопки стал "Remove", нажать еще раз и проверить, что товар удален (badge исчез).
    test.skip("Позитивный: standard user добавляет 1 товар в корзину и удаляет его.", async () => {
        // TODO: реализовать во время лайвкодинга.
    });
    // Задание: добавить "backpack", открыть корзину, удалить товар в корзине и проверить, что корзина пустая (badge отсутствует).
    test.skip("Позитивный: standard user добавляет товар и удаляет его уже на странице корзины.", async () => {
        // TODO: реализовать во время лайвкодинга.
    });
    // Задание: добавить "backpack" и "bike-light", проверить, что значение badge равно "2".
    test.skip("Позитивный: standard user добавляет 2 товара в корзину.", async () => {
        // TODO: реализовать во время лайвкодинга.
    });
});
