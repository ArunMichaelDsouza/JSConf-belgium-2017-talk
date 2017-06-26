const webpack = require('webpack');

module.exports = {
	entry: './src/js/app.js',
	output: {
		filename: './build/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					presets: [[
						'es2015', 
						//{ modules: false }
					]]
				}
			}
		]
	}
};