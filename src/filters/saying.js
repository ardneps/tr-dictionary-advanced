module.exports = async (data) => {
    const [{ sozum, anlami, anahtar, turu2 }] = data;
    
    return {
        soz: sozum,
        anlam: anlami,
        cesit: turu2,
        anahtar_kelimeler: anahtar
    };
};