const content = {
  'en': () => import('./contact-page.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'id': () => import('./contact-page.id.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'zh': () => import('./contact-page.zh.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
