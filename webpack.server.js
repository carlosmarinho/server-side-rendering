const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

//module.exports = {
const config = {
    //Inform webpack that we're building a bundle
    // for nodeJS, rather than for the browser
    target: 'node',

    //Tell webpack the root file of our
    //server application
    entry: './src/index.js',

    //tell webpack where to put the output file
    //that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    //This rule is going to tell webpack to not bundle any libraires
    //into our output bundle on the server if that library exists inside the node modules folder
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);