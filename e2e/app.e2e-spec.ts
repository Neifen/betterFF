import { BetterFfPage } from './app.po';

describe('better-ff App', () => {
  let page: BetterFfPage;

  beforeEach(() => {
    page = new BetterFfPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
