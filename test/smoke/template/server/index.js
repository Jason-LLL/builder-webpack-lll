if(typeof window === 'undefined'){
    global.window = {};
}
const path = require('path');
const fs = require('fs');
const express = require('express');
const { renderToString } = require('react-dom/server');
const SSR = require('../dist/index-server');
const template = fs.readFileSync(path.join(__dirname,'../dist/index.html'),'utf-8');
const data = require('./data.json');


function server(port) {
    const app = express();

    app.use(express.static('dist'));
    app.get("/search", (req, res) => {
        console.log(SSR);
        const str = renderToString(SSR);
        res.status(200).send(renderMarkup(str))
    });

    app.listen(port, () => {
        console.log('Server is running on:' + port);
    })
}

server(process.env.NODE_ENV || 3000);

const renderMarkup = (str) => {
    const dataStr = JSON.stringify(data);
    return template.replace('<!--HTML_PLACEHOLDER-->',str).replace('<!--DATA_INITIAL_PLACEHOLDER-->',`<script>window.initial_data = ${dataStr}</script>`);
}