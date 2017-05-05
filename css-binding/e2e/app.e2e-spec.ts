import { CssBindingPage } from './app.po';

describe('css-binding App', () => {
  let page: CssBindingPage;

  beforeEach(() => {
    page = new CssBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
