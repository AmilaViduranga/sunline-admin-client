import { SunlineClientPage } from './app.po';

describe('sunline-client App', () => {
  let page: SunlineClientPage;

  beforeEach(() => {
    page = new SunlineClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
