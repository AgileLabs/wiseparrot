import { browser, element, by } from 'protractor';

export class WiseParrotPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wpa-root h1')).getText();
  }
}
