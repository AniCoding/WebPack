const path = require ('path');

module.exports = {
    entry: './src/index.js' ,
    
    entry: './src/app.js',
    
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'HW_WebPack.bundle.js'
    }
}