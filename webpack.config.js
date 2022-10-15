const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = env => {

  const isDevelopment = env && env.development;

  return {
    entry: './src/index.ts',
    mode: isDevelopment ? "development" : "production",
    target: 'node',
    node: {
      __dirname: false,
      __filename: false,
    },
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    externals: [ nodeExternals() ],
    watch: isDevelopment,
  };
}
