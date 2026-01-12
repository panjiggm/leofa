const content = {
  'en': () => import('./home-page.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'id': () => import('./home-page.id.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'zh': () => import('./home-page.zh.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
