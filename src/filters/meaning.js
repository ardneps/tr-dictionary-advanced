const util = require("../utils/util");
const spelling_filter = require("../utils/spelling");

const { getAudio, getSpelling, sendRequest } = util;

module.exports = async (data) => {

    const { madde_duz, anlamlarListe, ozel_mi, cogul_mu, lisan, atasozu } = data[0];

    const firstMeaningList = anlamlarListe[0];
    const secondMeaningList = anlamlarListe[1];
    const thirdMeaningList = anlamlarListe[2];

    const { orneklerListe, fiil } = firstMeaningList

    const exampleList = orneklerListe;
    const sayingList = atasozu[0];

    const firstMeaning = (firstMeaningList) ?
        firstMeaningList.anlam : "Bu kelimenin bir anlamı bulunmuyor.";

    const secondMeaning = (secondMeaningList) ?
        secondMeaningList.anlam : "Bu kelimenin ikinci bir anlamı bulunmuyor.";

    const thirdMeaning = (thirdMeaningList) ?
        thirdMeaningList.anlam : "Bu kelimenin üçüncü bir anlamı bulunmuyor.";

    const isVerb = (fiil == 1) ? true : false;

    const isSpecial = (ozel_mi == 1) ? true : false;

    const isPlural = (cogul_mu == 1) ? true : false;

    const origin = (lisan) ? lisan : "Türkçe";

    const example = (exampleList) ?
        exampleList[0].ornek : "Bu kelimenin kullanıldığı bir cümle örneği bulunmuyor.";

    const saying = (sayingList) ? sayingList.madde : "Bu kelimenin kullanıldığı bir atasözü bulunmuyor.";

    const audio = await getAudio(madde_duz, getSpelling, spelling_filter, sendRequest);

    const json = {
        kelime: madde_duz,
        anlam: firstMeaning,
        ikinci_anlam: secondMeaning,
        ucuncu_anlam: thirdMeaning,
        fiil_mi: isVerb,
        ozel_mi: isSpecial,
        cogul_mu: isPlural,
        koken: origin,
        ornek: example,
        atasozu_deyim: saying,
        sesURL: audio,
    };

    return json;

};