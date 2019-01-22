
const path = require('path');


module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname , 'dist'),
		filename:  "sensor.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
		]
	},
	mode: 'production'
}
