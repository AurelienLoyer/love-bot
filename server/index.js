const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const utils = require('./utils');
const config = require('./config');

app.use(bodyParser.json());

app.post('/pullrequest', (req, res) => {
    const owner = req.body.repository.owner.login;
    const repo = req.body.repository.name;
    const sha = req.body.pull_request.head.sha;
    const context = 'LoveBot/PR/BranchName';
    let state = 'success';
    let description = 'You have selected the right branch';

    if (req.body.pull_request.base.ref !== config.BASE_PULLREQUEST_BRANCH) {
        state = 'error';
        description = `You should use the 
                ${config.BASE_PULLREQUEST_BRANCH} as the base branch`;
    }

    utils.updateStatus(owner, repo, sha, state, description, context);
    res.send('Hello World!');
});


app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});
