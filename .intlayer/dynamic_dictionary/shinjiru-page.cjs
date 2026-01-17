const content = {
  'en': () => Promise.resolve(require('./shinjiru-page.en.json')),
  'id': () => Promise.resolve(require('./shinjiru-page.id.json')),
  'zh': () => Promise.resolve(require('./shinjiru-page.zh.json'))
};
module.exports = content;
