var path = require('path');

module.exports = {
    entry: {
        app: './js/glory.js'
    },

    output: {
        path: './dist',
        filename: "bundle.js"
    },

    resolve: {
        alias: {
            jquery: path.resolve(__dirname, 'js/vendor', 'jquery-2.1.4.js')
        }
    },
     module: {
        loaders: [
            { test: /\.ejs$/, loader: require.resolve("./node_modules/ejs-compiled-loader") }
        ]
    }
};