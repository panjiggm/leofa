const content = {
  'en': () => import('./project9-page.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'id': () => import('./project9-page.id.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'zh': () => import('./project9-page.zh.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
