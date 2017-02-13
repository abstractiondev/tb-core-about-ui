import { TbCoreAboutUiPage } from './app.po';

describe('tb-core-about-ui App', function() {
  let page: TbCoreAboutUiPage;

  beforeEach(() => {
    page = new TbCoreAboutUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
