const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = env => {

  const isDevelopment = env && env.development;
  const rootDir = path.join(__dirname)

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
      alias: {
        "~": path.resolve(rootDir, 'src')
      }
    },
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },
    externals: [ nodeExternals() ],
    watch: isDevelopment,
  };
}
