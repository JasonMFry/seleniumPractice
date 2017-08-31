const webdriver = require('selenium-webdriver');

// open Firefox
const driver = new webdriver.Builder().forBrowser('firefox').build();
// maximize window
driver.manage().window().maximize();
// delete all cookies
driver.manage().deleteAllCookies();

driver.get("https://nodejs.org/en/");

describe('NodeJS Website Test', () => {

    it('Checks the page title', (done) => {
        let pageTitle = driver.findElement(webdriver.By.tagName('title'));
        pageTitle.getText().then((title) => {
            expect(title).toBe('Node.js');
            done();
        });
    });

    it('Checks the Node.js version', (done) => {
        let nodeVersion = driver.findElement(webdriver.By.css(".home-downloadbutton"));
        nodeVersion.getAttribute('title').then((title) => {
            expect(title).toContain('6.11');
            done();
        });
    });

}); // end describe NodeJS Website Test