module.exports = {
	entry: './src/rxlearn.js',
	output: {
		path: './dist',
		filename:'rxlearn.bundle.js'
	},
	module: {
		loaders: [{
			exclude: '/node_modules/',
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}]
	}
}
