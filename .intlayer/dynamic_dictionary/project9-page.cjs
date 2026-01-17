const content = {
  'en': () => Promise.resolve(require('./project9-page.en.json')),
  'id': () => Promise.resolve(require('./project9-page.id.json')),
  'zh': () => Promise.resolve(require('./project9-page.zh.json'))
};
module.exports = content;
