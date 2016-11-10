import { PollutionBlogPage } from './app.po';

describe('pollution-blog App', function() {
  let page: PollutionBlogPage;

  beforeEach(() => {
    page = new PollutionBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mg works!');
  });
});
