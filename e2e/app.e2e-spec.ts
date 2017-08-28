import { AngularWithWebPackPage } from './app.po';

describe('angular-with-web-pack App', function() {
  let page: AngularWithWebPackPage;

  beforeEach(() => {
    page = new AngularWithWebPackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
