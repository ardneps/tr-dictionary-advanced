module.exports = async (data) => {

    const [{ sozu, ekler, seskod }] = data;

    const appendices = (ekler) ? ekler : "Bu kelimenin herhangi bir eki bulunmuyor.";
    
    return {
        kelime: sozu,
        kelimenin_ekleri: appendices,
        ses_kod: seskod
    };
};