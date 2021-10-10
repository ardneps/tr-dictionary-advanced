module.exports = async (data) => {

    const [{ ad, anlam, cins }] = data;

    const gender = (cins == "1") ? "Kız" : "Erkek";

    return {
        isim: ad,
        anlam: anlam,
        cinsiyet: gender
    };
};