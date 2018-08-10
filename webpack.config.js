module.exports = {
  entry: './script.js', // where to start compiling
  output: {
    // where to out the output
    filename: 'compiled-script.js', // filename (bundle.js)
    path: __dirname // where to save it
  },
  module: {
    // which loaders to use
    rules: [
      {
        test: /js$/, // which files ...
        exclude: /node_modules/, // files we want webpack to ignore
        loader: 'babel-loader' // ... should use which loader
      }
    ]
  }
};
