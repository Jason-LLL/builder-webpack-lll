const path = require('path');


process.chdir(path.join(__dirname,'smoke/template')); //webpack.base.js  根入口都在 template目录

describe('webpack-base unit test', () => {
    require('./unit/webpack-base-test');
})