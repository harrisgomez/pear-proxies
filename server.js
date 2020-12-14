const express = require('express');
const app = express();
const port = 8080;

const request = require('request');
const proxy = "https://mpalomo4389:{API_KEY}@proxy.packetstream.io:31111";
const url = "https://ipv4.icanhazip.com";
const proxiedRequest = request.defaults({ 'proxy': proxy });

app.get('/yourWife', (req, res) => {

    console.log('YOUR WIFE IS PREPARING YOUR GOURMET MEAL');

    proxiedRequest.get(url, function (err, resp, body) {

        if (err) console.log ('YOUR MOMS ERROR', err);

        console.log('YOUR MOMS RESP', resp);
        console.log('YOUR DADS BODY', body);

    });

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});