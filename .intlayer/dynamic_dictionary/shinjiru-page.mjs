const content = {
  'en': () => import('./shinjiru-page.en.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'id': () => import('./shinjiru-page.id.json', { assert: { type: 'json' }}).then(mod => mod.default),
  'zh': () => import('./shinjiru-page.zh.json', { assert: { type: 'json' }}).then(mod => mod.default)
};
export default content;
