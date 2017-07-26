import { XtantranshPage } from './app.po';

describe('xtantransh App', () => {
  let page: XtantranshPage;

  beforeEach(() => {
    page = new XtantranshPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
