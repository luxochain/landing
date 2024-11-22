let en = require("./translations.en.json");
let it = require("./translations.it.json");
let cn = require("./translations.cn.json");

const i18n = {
    translations: {
        en,
        it,
        cn
    },
    defaultLang: "en",
    useBrowserDefault: true,
    languageDataStore: "localStorage",
};

module.exports = i18n;