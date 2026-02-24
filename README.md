# Playwright TypeScript: задание для лайвкодинга

Этот репозиторий подготовлен как лайвкодинг-задача по QA automation для
https://www.saucedemo.com/.

Готовые тесты удалены и заменены на `test.skip(...)` заглушки для лайвкодинга.

## Стек

- Playwright Test
- TypeScript
- Page Object Model

## Установка

```sh
npm run setup
```

Требование к Node.js: `>=18.18.0`.

## Команды запуска

```sh
npm run play:test
npm run play:headed
npm run test-l
npm run test-c
npm run test-s
```

## Быстрый старт на любой ОС

1. `git clone <repo-url>`
2. `cd playwright-ts-project`
3. `npm run setup`
4. `npm run play:test`

## Частые проблемы

### Cannot find module '@playwright/test' (ts2307)

Причина: зависимости не установились локально.

Что сделать:

1. `npm install`
2. `npx playwright install`
3. Перезапустить TypeScript Server в IDE (или перезапустить IDE)

## Формат лайвкодинга

- Длительность сессии: 60 минут.
- Во время выполнения можно задавать уточняющие вопросы.
- Работай итеративно и запускай тесты по мере реализации.
- Приоритет: читаемость и стабильность, а не покрытие всех возможных edge-case.

## Область задания

Реализуй тесты в файлах:

- `test/Login.test.spec.ts`
- `test/Cart.test.spec.ts`
- `test/Sorting.test.spec.ts`

В каждом файле есть `test.skip(...)` с нужными сценариями.

Рекомендуемый порядок выполнения:

1. `Login.test.spec.ts` (обязательный минимум)
2. `Cart.test.spec.ts` (следующий приоритет)
3. `Sorting.test.spec.ts` (если останется время)

## Требования

- Используй `@playwright/test` как раннер.
- Сохраняй подход Page Object Model (объекты в `page/`).
- Переиспользуй данные из `data/credentials.json`.
- Избегай статических ожиданий (`waitForTimeout`), если они не абсолютно необходимы.
- Пиши детерминированные проверки.

## Критерии оценки

- Корректность реализованных сценариев.
- Читаемость и поддерживаемость кода.
- Стабильность выполнения тестов.
- Корректная структура и переиспользование существующих утилит проекта.
