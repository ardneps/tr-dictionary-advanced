module.exports = async (data) => {

    const { sozum, anlami, anahtar, turu2 } = data[0];

    const json = {
        soz: sozum,
        anlam: anlami,
        cesit: turu2,
        anahtar_kelimeler: anahtar
    };

    return json;

};