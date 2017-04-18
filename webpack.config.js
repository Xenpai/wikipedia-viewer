var debug = process.env.NODE_ENV !== "production";
var webpack = require( 'webpack' );

module.exports = {
    context: __dirname,
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "scripts.min.js"
    },
    module: {
        rules: [ {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.hbs$/,
                use: "handlebars-loader"
            }
        ]
    }
};
