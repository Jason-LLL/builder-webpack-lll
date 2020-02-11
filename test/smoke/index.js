const path = require('path');
const webpack = require('webpack');
const rimraf = require('rimraf');
const mocha = require('mocha');

process.chdir(path.join(__dirname, 'template'));

rimraf('./dist', () => {
    const proConfig = require('../../lib/webpack.pro');

    webpack(proConfig, (err, stats) => {
        if (err) {
            console.log(err);
            process.exit(2)
        }
        console.log(stats.toString({
            colors: true,
            module: false,
            children: false
        }))
        
        const Mocha = new mocha({
            timeout: 100000
        });

        Mocha.addFile(path.join(__dirname,'./html-test.js'));
        Mocha.addFile(path.join(__dirname,'./css-js-test.js'));
        Mocha.run();

    })
})