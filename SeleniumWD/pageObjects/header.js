const webdriver = require('selenium-webdriver');

class Header{
    constructor() {
        this.selebiumHQ = webdriver.By.css("a[title = 'Return to Selenium home page']");
        this.projects = webdriver.By.css("a[title = 'Selenium Projects']");
        this.download = webdriver.By.css("a[title = 'Get Selenium']");
        this.documentation = webdriver.By.css("#menu_documentation > a");
        this.support = webdriver.By.css("a[title = 'Get help with Selenium']");
        this.about = webdriver.By.css("a[title = 'Overview of Selenium']");
        this.searchFild = webdriver.By.id("q");
        this.searchGo = webdriver.By.id("submit");
    }
}
module.exports = Header;