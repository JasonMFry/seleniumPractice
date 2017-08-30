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
driver.get('http://app-qa.feathr.co/').then(() => {
    return driver.findElement(webdriver.By.name('username'));
}).then((username) => {
    username.sendKeys('REDACTED');
}).then(() => {
    return driver.findElement(webdriver.By.name('password'));
}).then((password) => {
    password.sendKeys('REDACTED');
}).then(() => {
    return driver.findElement(webdriver.By.css(".btn.btn-info"));
}).then((button) => {
    return button.click();
}).then(() => {
    driver.sleep(1000);
    return driver.findElement(webdriver.By.css(".username"));
}).then((username) => {
    console.log(username);
}).then(() => {
    driver.sleep(2000);
    driver.quit();
});

