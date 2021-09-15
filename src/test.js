'use strict';

const axios = require('axios');
const response = (statusCode, body) => ({
    statusCode: statusCode,
    body: JSON.stringify(body),
});

module.exports.testCall = async (event) => {
    try {
        await axios.get(process.env.TALING_ENDPOINT + '/api3/talent/liveroom.php');
        return response(200, {
            message: 'OK testCall',
            input: event,
        });
    } catch (error) {
        return response(error.response.status, {
            message: error.message,
            input: event,
        });
    }
};

module.exports.testCron = async (event) => {
    try {
        await axios.get(process.env.TALING_ENDPOINT + '/api3/talent/liveroom.php');
        return response(200, {
            message: 'OK testCron',
            input: event,
        });
    } catch (error) {
        return response(error.response.status, {
            message: error.message,
            input: event,
        });
    }
};