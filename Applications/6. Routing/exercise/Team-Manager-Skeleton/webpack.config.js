const path = require('path')

module.exports = {
    mode: 'development',    
    entry: ['./scripts/app.js', './scripts/firebase.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}