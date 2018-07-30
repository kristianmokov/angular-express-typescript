const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodemonPlugin = require('nodemon-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const dev = env === 'development';

// plugins
const devPlugins = [
  new NodemonPlugin()
];
const prodPlugins = [];
const commonPlugins = [];
const plugins = dev ? devPlugins.concat(commonPlugins) : prodPlugins.concat(commonPlugins);
const entry = './src/server/main.ts';

module.exports = {
  entry,
  output: {
    path: path.resolve(__dirname, "./bin"), 
    filename: "server.bundle.js"
  },
  plugins: plugins,
  target: "node",
  mode: "development",
  externals: [
    nodeExternals()
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      },
      {
        enforce: "pre",
        test: /\.tsx?$/,
        loader: "tslint-loader",
        options: {
          configFile: "./src/server/tslint.json"
        },
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [ ".ts" ]
  }
}
