const _VX4m3wOGaAk3LWtKEDNa = require('../dictionary/home-page.json');
const _GG5IWJ4hsteeVmZRznkm = require('../dictionary/project9-page.json');
const _PLPd2UW4W9aoyu0fkDW5 = require('../dictionary/shinjiru-page.json');

const dictionaries = {
  "home-page": _VX4m3wOGaAk3LWtKEDNa,
  "project9-page": _GG5IWJ4hsteeVmZRznkm,
  "shinjiru-page": _PLPd2UW4W9aoyu0fkDW5
};
const getDictionaries = () => dictionaries;

module.exports.getDictionaries = getDictionaries;
module.exports = dictionaries;
