const path = require('path')

const postCSSPlugins = [



]

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader?url=false', { loader: 'postcss-loader', options: { plugins: postCSSPlugins } }]
      }
    ]
  }
}