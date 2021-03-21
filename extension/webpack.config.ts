/**
 * @type import("webpack").Configuration
 */
module.exports = {
  mode: 'production',
  entry: {
    popup: `${__dirname}/src/popup.ts`,
    content: `${__dirname}/src/content.ts`,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
