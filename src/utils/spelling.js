module.exports = async (data) => {

    const { sozu, ekler, seskod } = data[0];

    const appendices = (ekler) ? ekler : "Bu kelimenin herhangi bir eki bulunmuyor.";
    
    const json = {
        kelime: sozu,
        kelimenin_ekleri: appendices,
        ses_kod: seskod
    };

    return json;

};