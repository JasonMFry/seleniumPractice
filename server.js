const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const Promise = require('promise');

// open Firefox
const driver = new webdriver.Builder().forBrowser('firefox').build();
// maximize window
driver.manage().window().maximize();
// delete all cookies
driver.manage().deleteAllCookies();
// navigate
driver.get('https://www.google.com/ncr').then(() => {
    console.log('Find Google query input');
    return driver.findElement(webdriver.By.name('q'));
}).then((q) => {
    console.log('Search for webdriver');
    q.sendKeys('webdriver');
}).then(() => {
    console.log('Find search button');
    return driver.findElement(webdriver.By.name('btnK'));
}).then((btnK) => {
    console.log('Click search button');
    return btnK.click();
}).then(() => {
    console.log('Get title method');
    driver.sleep(1000);
    return driver.getTitle();
}).then((title) => {
    console.log(title);
}).then(() => {
    driver.sleep(2000);
    driver.quit();
});
