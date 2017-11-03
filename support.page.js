'use strict';

class Support {
    constructor() {
        this.url = 'https://protonmail.com/support/';
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.searchInput = element(by.css('input#s'));
        this.searchSubmit = element(by.css('button#searchsubmit'));
        this.webApp = element(by.css('#accordion > ul > li:nth-child(1) > a'));

        this.mobileApp = element(by.css('#accordion > ul > li:nth-child(2) > a'));

        this.customDomains = element(by.css('#accordion > ul > li:nth-child(3) > a.trigger'));

        this.reportBug = element(by.css('a[href="https://protonmail.com/support/knowledge-base/report-bug/"][class="trigger link"]'));

        this.requestFeature = element(by.css('#accordion > ul > li:nth-child(6) > a'));

        this.whyProtonMail = element(by.css('div#links a[href="https://protonmail.com/support/categories/why-protonmail-gettingstarted/"]'));
        this.signUp = element(by.css('div#links a[href="https://protonmail.com/support/categories/sign-up/"]'));
        this.loginAndPass = element(by.css('div#links a[href="https://protonmail.com/support/categories/passwords/"]'));
        this.switchingToProtonMail = element(by.css('div#links a[href="https://protonmail.com/support/categories/switching/"]'));
        this.mobile = element(by.css('div#links a[href="https://protonmail.com/support/categories/mobile/"]'));
        this.contacts = element(by.css('div#links a[href="https://protonmail.com/support/categories/contacts-gettingstarted/"]'));
        this.sendAndReceiveMessages = element(by.css('div#links a[href="https://protonmail.com/support/categories/sendandreceive/"]'));
        this.gettingOrganized = element(by.css('div#links a[href="https://protonmail.com/support/categories/getting-organized/"]'));
        this.tipsAndTricks = element(by.css('div#links a[href="https://protonmail.com/support/categories/tipsandtricks/"]'));
        this.plansAndPrices = element(by.css('div#links a[href="https://protonmail.com/support/knowledge-base/paid-plans/"]'));
        this.upgrading = element(by.css('#links > div > div > div:nth-child(3) > ul > li:nth-child(3) > a'));
        this.downgrading = element(by.css('#links > div > div > div:nth-child(3) > ul > li:nth-child(4) > a'));
        this.features = element(by.css('#links > div > div > div:nth-child(4) > ul > li:nth-child(1) > a'));
        this.upcomingFeatures = element(by.css('#links > div > div > div:nth-child(4) > ul > li:nth-child(2) > a'));
        this.plannedFeatures = element(by.css('div#links a[href="https://protonmail.com/support/categories/protonmail-is-great/"]'));
        this.featureRequest = element(by.css('div#links a[href="https://protonmail.uservoice.com/forums/284483-feedback"]"]'));

        this.contactOurSupportTeam = element(by.css('div#contact-us a'))
    }
}
module.exports = Support;