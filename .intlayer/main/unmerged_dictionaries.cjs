const _oY5M7SwnYUkO5YClq1NO = require('../unmerged_dictionary/home-page.json');
const _tZQQIW9Xkb51YIE2XAVm = require('../unmerged_dictionary/project9-page.json');
const _2EHvb81a61BHREpHIEm9 = require('../unmerged_dictionary/shinjiru-page.json');

const dictionaries = {
  "home-page": _oY5M7SwnYUkO5YClq1NO,
  "project9-page": _tZQQIW9Xkb51YIE2XAVm,
  "shinjiru-page": _2EHvb81a61BHREpHIEm9
};
const getUnmergedDictionaries = () => dictionaries;

module.exports.getUnmergedDictionaries = getUnmergedDictionaries;
module.exports = dictionaries;
