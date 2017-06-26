const webpack = require('webpack');

module.exports = {
	entry: './js/src/app.js',
	output: {
		filename: './js/build/bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react', 'stage-2']
				}
			}
		]
	},
	// plugins: [
	// 	new webpack.optimize.UglifyJsPlugin(),
	// 	new webpack.DefinePlugin({
	// 		'process.env.NODE_ENV': JSON.stringify('production')
	// 	})
	// ]
};