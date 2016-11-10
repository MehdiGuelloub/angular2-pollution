import { browser, element, by } from 'protractor';

export class PollutionBlogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mg-root h1')).getText();
  }
}
