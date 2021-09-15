'use strict';

// const axios = require('axios');
const response = (statusCode, body) => ({
    statusCode: statusCode,
    body: JSON.stringify(body),
});

const env = {
    TALING_ENDPOINT: process.env.TALING_ENDPOINT,
    TALING_ADMIN_ENDPOINT: process.env.TALING_ADMIN_ENDPOINT,
}

module.exports.testCall = async (event) => {
    try {
        //await axios.get(process.env.TALING_ENDPOINT + '/api3/talent/liveroom.php');
        return response(200, {
            message: 'OK testCall',
            env: env,
            input: event,
        });
    } catch (error) {
        return response(error.response?.status, {
            message: error.message,
            input: event,
        });
    }
};

module.exports.testCron = async (event) => {
    try {
        //await axios.get(process.env.TALING_ENDPOINT + '/api3/talent/liveroom.php');
        return response(200, {
            message: 'OK testCron',
            env: env,
            input: event,
        });
    } catch (error) {
        return response(error.response.status, {
            message: error.message,
            input: event,
        });
    }
};