const glob = require('glob-all');

describe('check generated html files',()=>{
    it('should generate a html file',(done)=>{
        const files = glob.sync([
            './dist/index.html',
            './dist/hiwebpack.html'
        ]);

        if(files.length > 0 ){
            done();
        } else {
            throw new Error('no html file genarate');
        }
    })
})