const assert = require('assert');

describe('webpack-base unit test case', () => {

    const baseConfig = require('../../lib/webpack.base');
    //console.log(baseConfig);
    it('entry', () => {
        assert.equal(baseConfig.entry.index.indexOf('builder-webpack-lll/test/smoke/template/src/index/index.js') > -1);
        assert.equal(baseConfig.entry.hiwebpack.indexOf('builder-webpack-lll/test/smoke/template/src/index/index.js') > -1);
    })
})