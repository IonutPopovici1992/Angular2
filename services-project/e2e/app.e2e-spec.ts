import { ServicesProjectPage } from './app.po';

describe('services-project App', function() {
  let page: ServicesProjectPage;

  beforeEach(() => {
    page = new ServicesProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
