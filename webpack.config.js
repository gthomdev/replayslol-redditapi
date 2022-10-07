const path = require('path');

module.exports = env => {

  const isDevelopment = env && env.development;

  return {
    entry: './src/index.ts',
    mode: isDevelopment ? "development" : "production",
    target: 'node',
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
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
    watch: isDevelopment,
  };
}
