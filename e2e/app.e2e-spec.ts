import { WiseParrotPage } from './app.po';

describe('wise-parrot App', () => {
  let page: WiseParrotPage;

  beforeEach(() => {
    page = new WiseParrotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wpa works!');
  });
});
