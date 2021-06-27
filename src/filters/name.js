module.exports = async (data) => {

    const { ad, anlam, cins } = data[0];

    const gender = (cins == "1") ? "Kız" : "Erkek";

    const json = {
        isim: ad,
        anlam: anlam,
        cinsiyet: gender
    };

    return json;

};