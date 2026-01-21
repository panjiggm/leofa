const content = {
  'en': () => Promise.resolve(require('./contact-page.en.json')),
  'id': () => Promise.resolve(require('./contact-page.id.json')),
  'zh': () => Promise.resolve(require('./contact-page.zh.json'))
};
module.exports = content;
