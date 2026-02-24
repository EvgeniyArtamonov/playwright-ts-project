import type {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    testDir: './test',
    use: {
        baseURL: process.env.BASE_URL || 'https://www.saucedemo.com/',
        // Run headless by default for better cross-platform compatibility.
        // Set PW_HEADED=1 to run with a visible browser window.
        headless: process.env.PW_HEADED !== '1',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
    },
    timeout: 60 * 1000 * 5,
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }]]
};

export default config;
