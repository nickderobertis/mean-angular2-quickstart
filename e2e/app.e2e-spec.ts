import { MeanStarterPage } from './app.po';

describe('mean-starter App', () => {
  let page: MeanStarterPage;

  beforeEach(() => {
    page = new MeanStarterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
