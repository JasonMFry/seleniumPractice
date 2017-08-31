const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
const fs = require('fs');
const config = require('./config');

// open Firefox
const driver = new webdriver.Builder().forBrowser('firefox').build();
// maximize window
driver.manage().window().maximize();
// delete all cookies
driver.manage().deleteAllCookies();

driver.get('http://app-qa.feathr.co/#login')
const usernameField = driver.findElement(By.css("#login-username"));
const passwordField = driver.findElement(By.css("#login-password"));
const signInButton = driver.findElement(By.css("button.btn.btn-info "));

usernameField.sendKeys(config.username);
passwordField.sendKeys(config.password);
signInButton.click();