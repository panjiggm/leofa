const content = {
  'en': () => Promise.resolve(require('./home-page.en.json')),
  'id': () => Promise.resolve(require('./home-page.id.json')),
  'zh': () => Promise.resolve(require('./home-page.zh.json'))
};
module.exports = content;
