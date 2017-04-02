import { FootballLivePage } from './app.po';

describe('football-live App', () => {
  let page: FootballLivePage;

  beforeEach(() => {
    page = new FootballLivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
