const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

// open Firefox
const driver = new webdriver.Builder().forBrowser('firefox').build();
// maximize window
driver.manage().window().maximize();
// delete all cookies
driver.manage().deleteAllCookies();
// navigate
driver.get('https://en.wikipedia.org/wiki/Main_Page');
driver.findElements(webdriver.By.css('[href^="/wiki/"]')).then((links) => {
    console.log('Found', links.length, 'wiki links');
    driver.quit();
});