const webpack = require('webpack');

module.exports = {
	entry: './src/js/app.js',
	output: {
		filename: './build/bundle.js'
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
	// 		minChunks: 2,
	//		minChunks: function (module) {
	//			return module.context && module.context.indexOf('node_modules') !== -1;
	//		}
	// 	})
	// ]
};