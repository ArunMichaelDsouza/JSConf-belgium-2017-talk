const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
	webpack = require('webpack');

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
					presets: ['es2015', 'react', 'stage-2']
				}
			}
		]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(), // Add UglifyJS plugin to correctly show parsed size
		new BundleAnalyzerPlugin()
	]
};