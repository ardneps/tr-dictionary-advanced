module.exports = async (data) => {

    const { sozcuk, anlam, ingiliz, alman, fransiz, latin } = data[0];

    const ingilizce = (ingiliz) ? ingiliz : "Bu kelimenin bir İngilizce karşılığı bulunmuyor.";
    const almanca = (alman) ? alman : "Bu kelimenin bir Almanca karşılığı bulunmuyor.";
    const fransizca = (fransiz) ? fransiz : "Bu kelimenin bir Fransızca karşılığı bulunmuyor.";
    const latince = (latin) ? latin : "Bu kelimenin bir Latince karşılığı bulunmuyor.";

    const json = {
        kelime: sozcuk,
        anlam: anlam,
        ingilizce: ingilizce,
        almanca: almanca,
        fransizca: fransizca,
        latince: latince
    };

    return json;

};