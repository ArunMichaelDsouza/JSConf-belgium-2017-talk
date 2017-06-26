const webpack = require('webpack');

module.exports = {
	entry: {
		index: './src/js/index.js',
		about: './src/js/about.js',
		product: './src/js/product.js'
	},
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
	},
	// plugins: [
	// 	new webpack.optimize.CommonsChunkPlugin({
	// 		name: 'vendor',
	// 		minChunks: 2
	// 	})
	// ]
};