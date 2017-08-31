const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const fs = require('fs');

// open Firefox
const driver = new webdriver.Builder().forBrowser('firefox').build();
// maximize window
driver.manage().window().maximize();
// delete all cookies
driver.manage().deleteAllCookies();

driver.get('https://iolearn.com');
driver.takeScreenshot().then((data) => {
    fs.writeFileSync('img.png', data, 'base64');
});
driver.quit();