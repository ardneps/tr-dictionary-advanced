const util = require("./utils/util");
const { sendRequest } = util;

const meaning_filter = require("./filters/meaning");
const saying_filter = require("./filters/saying");
const term_filter = require("./filters/term");
const name_filter = require("./filters/name");

const getMeaning = async (query) => {

    const response = await sendRequest("gts?", query);
    const data = meaning_filter(response);
    return data;

};

const getSaying = async (query) => {

    const response = await sendRequest("atasozu?", query);
    const data = saying_filter(response);
    return data;

};

const getTermMeaning = async (query) => {

    const response = await sendRequest("terim?eser_ad=t%C3%BCm%C3%BC&", query);
    const data = term_filter(response);
    return data;

};

const getNameMeaning = async (query) => {

    const response = await sendRequest("adlar?gore=1&cins=4&", query);
    const data = name_filter(response);
    return data;

};

module.exports = {

    getMeaning: getMeaning,
    getSaying: getSaying,
    getTermMeaning: getTermMeaning,
    getNameMeaning: getNameMeaning,

};