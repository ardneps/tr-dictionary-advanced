const util = require("./utils/util");
const { sendRequest } = util;

const meaning_filter = require("./filters/meaning");
const saying_filter = require("./filters/saying");
const term_filter = require("./filters/term");
const name_filter = require("./filters/name");

const getMeaning = async (query) => {
    const response = await sendRequest("gts?", query);
    return meaning_filter(response);
};

const getSaying = async (query) => {
    const response = await sendRequest("atasozu?", query);
    return saying_filter(response);
};

const getTermMeaning = async (query) => {
    const response = await sendRequest("terim?eser_ad=t%C3%BCm%C3%BC&", query);
    return term_filter(response);
};

const getNameMeaning = async (query) => {
    const response = await sendRequest("adlar?gore=1&cins=4&", query);
    return name_filter(response);
};

module.exports = {
    getMeaning,
    getSaying,
    getTermMeaning,
    getNameMeaning,
};