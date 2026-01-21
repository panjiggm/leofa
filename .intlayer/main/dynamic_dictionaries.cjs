const _vgQGOwd6TghOZ2XOCmRm = require('../dynamic_dictionary/contact-page.cjs');
const _NWxe38ScsIL84X6V6eau = require('../dynamic_dictionary/home-page.cjs');
const _ItMqCrpdffYuiGTYSaxi = require('../dynamic_dictionary/project9-page.cjs');
const _K7sa742ba7bjsvS5bZoP = require('../dynamic_dictionary/shinjiru-page.cjs');

const dictionaries = {
  "contact-page": _vgQGOwd6TghOZ2XOCmRm,
  "home-page": _NWxe38ScsIL84X6V6eau,
  "project9-page": _ItMqCrpdffYuiGTYSaxi,
  "shinjiru-page": _K7sa742ba7bjsvS5bZoP
};
const getDynamicDictionaries = () => dictionaries;

module.exports.getDynamicDictionaries = getDynamicDictionaries;
module.exports = dictionaries;
