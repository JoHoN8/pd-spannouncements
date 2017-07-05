const   path = require('path');

module.exports = {
    entry: './src/scripts/app.js',
    output: {
        path: path.resolve(__dirname, "./dist/scripts"),
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
                //allows for import of styles (import css from 'file.css');
            },
            {  
                test: /\.js$|\.jsx$/,
                //exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {}
                }
            }
        ]
    },
    plugins: [],
    externals: {}
    //devtool: 'source-map'
};

