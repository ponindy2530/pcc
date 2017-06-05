import { PdcPage } from './app.po';

describe('pdc App', () => {
  let page: PdcPage;

  beforeEach(() => {
    page = new PdcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
