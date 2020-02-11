const assert = require('assert');

describe('webpack-base unit test case', () => {

    const baseConfig = require('../../lib/webpack.base');
    //console.log(baseConfig);
    it('entry', () => {
        assert.equal(baseConfig.entry.index,'/Users/yuelu/Desktop/webpack/webpackDemo/builder-webpack/test/smoke/template/src/index/index.js');
        assert.equal(baseConfig.entry.hiwebpack,'/Users/yuelu/Desktop/webpack/webpackDemo/builder-webpack/test/smoke/template/src/hiwebpack/index.js');
    })
})