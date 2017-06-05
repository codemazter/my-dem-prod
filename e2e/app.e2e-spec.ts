import { MyDemoProdPage } from './app.po';

describe('my-demo-prod App', () => {
  let page: MyDemoProdPage;

  beforeEach(() => {
    page = new MyDemoProdPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
