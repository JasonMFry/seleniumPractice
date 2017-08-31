const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;

// open Firefox
const driver = new webdriver.Builder().forBrowser('firefox').build();
// maximize window
driver.manage().window().maximize();
// delete all cookies
driver.manage().deleteAllCookies();
// helper functions
function findLink(link) {
    return driver.findElements(webdriver.By.css(`[href="${link}"]`))
        .then((results) => {
            return results[0];
        });
}

function clickLink(link) {
    link.click();
}

function logTitle() {
    driver.sleep(1000);
    driver.getTitle().then((title) => {
        console.log(`Current page title is ${title}`)
    });
}

function closeBrowser() {
    driver.quit();
}

function handleFailure(err) {
    console.log(`Something went wrong: ${err.stack}`);
    closeBrowser();
}

// navigate
driver.get('https://www.google.com/');
driver.findElement(webdriver.By.name('q')).sendKeys('iolearn Video Tutorials');
driver.findElement(webdriver.By.name('btnK')).click();
driver.wait(findLink("https://iolearn.com/"), 2000)
    .then(clickLink)
    .then(logTitle)
    .then(closeBrowser, handleFailure);