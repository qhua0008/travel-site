module.exports = {
  entry: "./docs/assets/scripts/App.js",
  output: {
    path: "./docs/temp/scripts",
    filename: "App.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
};
