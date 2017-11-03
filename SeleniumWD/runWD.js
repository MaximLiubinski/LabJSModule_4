const {Builder, By, Key, until} = require('selenium-webdriver');
const Header = require('./pageObjects/header.js');

let driver = new Builder()
    .forBrowser('chrome')
    .build();

let header = new Header();

driver.manage().window().maximize()
    .then(() => driver.get('http://www.google.com/ncr'))
    .then(() => driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
    .then(() => driver.wait(until.titleIs('webdriver - Google Search'), 1000))
    .then(() => driver.findElement(By.linkText("Selenium WebDriver")).click())
    .then(() => driver.findElement(header.selebiumHQ).click())
    .then(() => driver.findElement(header.projects).click())
    .then(() => driver.findElement(header.download).click())
    .then(() => driver.findElement(header.support).click())
    .then(() => driver.findElement(header.about).click())
    .then(() => driver.findElement(header.documentation).click());

driver.executeScript('window.open("https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/");')
    .then(() => driver.switchTo().window('Selenium Documentation — Selenium Documentation'));

//driver.quit();