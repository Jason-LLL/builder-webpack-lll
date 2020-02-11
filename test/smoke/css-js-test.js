const glob = require('glob-all');

describe('check generated css-js files',()=>{
    it('should generate a css-js file',(done)=>{
        const files = glob.sync([
            './dist/index_*.js',
            './dist/index_*.css',
            './dist/hiwebpack_*.js',
            './dist/common_*.js'
        ]);

        if(files.length > 0 ){
            done();
        } else {
            throw new Error('no css-js file genarate');
        }
    })
})