const webpack = require('webpack');

module.exports = {
	entry: './src/js/app.js',
	output: {
		filename: './build/[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				}
			}
		]
	}
};