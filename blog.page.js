'use strict';

class Blog {
    constructor() {
        this.url = 'https://protonmail.com/blog/';
        this.openPage = function () {
            return browser.get(this.url);
        };
        this.searchInput = element(by.css('input#s'));
        this.searchSubmit = element(by.css('button#searchsubmit'));
        this.allCategory = element(by.css('a[href="https://protonmail.com/blog/"][class="btn btn-ghost alt"]'));
        this.newsCategory = element(by.css('a[href="https://protonmail.com/blog/category/news/"][class="btn btn-ghost alt"]'));
        this.encryptionCategory = element(by.css('a[href="https://protonmail.com/blog/category/encryption/"][class="btn btn-ghost alt"]'));
        this.privacyCategory = element(by.css('a[href="https://protonmail.com/blog/category/privacy/"][class="btn btn-ghost alt"]'));
        this.releasesCategory = element(by.css('a[href="https://protonmail.com/blog/category/release-notes/"][class="btn btn-ghost alt"]'));
        this.securityCategory = element(by.css('a[href="https://protonmail.com/blog/category/security/"][class="btn btn-ghost alt"]'));

        this.articles = element(by.css('div.posts div.col-md-4'));

        this.createAccountButton = element(by.css('a[href="/signup"]'));


    }
}
module.exports = Blog;