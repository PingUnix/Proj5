import { Proj5Page } from './app.po';

describe('proj5 App', function() {
  let page: Proj5Page;

  beforeEach(() => {
    page = new Proj5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
