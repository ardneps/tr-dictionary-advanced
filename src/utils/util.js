const fetch = require("node-fetch");

module.exports = {

    sendRequest: async (method, answer) => {

        const query = encodeURI(answer);
        const url = `https://sozluk.gov.tr/${method}ara=${query}`;

        const response = await fetch(url);
        const data = (await response.json());

        if (data.error) throw new TypeError(`Aratılan sorguyla alakalı veri bulunamadı! (${answer})`);

        return data;

    },

    getSpelling: async (query, spelling_filter, sendRequest) => {

        const response = await sendRequest("yazim?", query);
        const data = spelling_filter(response);
        return data;

    },

    getAudio: async (query, getSpelling, spelling_filter, sendRequest) => {

        const data = await getSpelling(query, spelling_filter, sendRequest);
        const { ses_kod } = data;

        const audioURL = `https://sozluk.gov.tr/ses/${ses_kod}.wav`
        return audioURL;

    }

};