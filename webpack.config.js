module.exports = {
  entry: "./app/components/Main.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}

// Purpose of the file
// We need to tell webpack where our root component is (entry)
// Then - tell webpack where to output the new file (output)
// Last thing - tell it what to actually do with Main.js and the code in it
// Presents - all the transformations that Babel will do to the code
