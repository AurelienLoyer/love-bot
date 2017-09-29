const request = require('request');
const config = require('./config');

exports.updateStatus =
    function(owner, repo, hash, state, description, context) {
        request({
            headers: {
            'Authorization': 'token ' + config.GITHUB_TOKEN,
            'Content-Type': 'application/json',
            'User-Agent': config.userAgent,
            },
            uri: `${config.baseUrl}/repos/${owner}/${repo}/statuses/${hash}`,
            body: JSON.stringify({state, description, context}),
            method: 'POST',
        });
    };
