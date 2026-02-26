import { expect, test } from "@playwright/test";
import LoginPage from "../page/Login.page";
import ProductsPage from "../page/Products.page";
import { Select } from "../utils/enums/select.enum";
import * as users from "../data/credentials.json";
import * as utility from "../utils/utility-methods";

test.describe("Sorting Feature @sorting", () => {
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
     Лайвкодинг-задача (приоритет 3):
     - В beforeEach: залогинься как standard user и проверь, что открыта страница Products.
     - Меняй сортировку через значения dropdown: lohi, hilo, az, za.
     - Проверяй, что порядок товаров на UI совпадает с ожидаемой сортировкой.
     - Можно переиспользовать методы из utils/utility-methods.ts.
    */

    // Задание: выбрать "lohi" и проверить, что цены отсортированы по возрастанию.
    test("Позитивный: пользователь сортирует товары по цене (по возрастанию).", async () => {
        await productsPage.selectByValue("lohi", Select.SORT);

        const prices = utility.convertStringArrayIntoNumberArray(await productsPage.getProductsPrice());
        const sorted = [...prices].sort((a, b) => a - b);

        expect(prices).toEqual(sorted);
    });
    // Задание: выбрать "hilo" и проверить, что цены отсортированы по убыванию.
    test.skip("Позитивный: пользователь сортирует товары по цене (по убыванию).", async () => {
        // TODO
    });
    // Задание: выбрать "az" и проверить, что названия отсортированы по алфавиту (A-Z).
    test.skip("Позитивный: пользователь сортирует товары по названию (A-Z).", async () => {
        // TODO
    });
    // Задание: выбрать "za" и проверить, что названия отсортированы по алфавиту (Z-A).
    test.skip("Позитивный: пользователь сортирует товары по названию (Z-A).", async () => {
        // TODO
    });
});
