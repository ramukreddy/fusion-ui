import { FusionUiPage } from './app.po';

describe('fusion-ui App', () => {
  let page: FusionUiPage;

  beforeEach(() => {
    page = new FusionUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
