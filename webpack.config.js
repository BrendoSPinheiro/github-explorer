const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// Variável para verificar o ambiente em que a aplicação está rodando ↓
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  // Diz qual o arquivo inicial da aplicação ↓
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  // Diz qual arquivo que vai ser gerado com webpack ↓
  output: {
    // Pasta onde o arquivo será gerado ↓
    path: path.resolve(__dirname, 'dist'),
    // Nome do arquivo que será gerado ↓
    filename: 'bundle.js'
  },
  resolve: {
    // Informa que o webpack pode ler esses 2 tipos de arquivo ↓
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ].filter(Boolean),
  /**
   * Informa como a aplicação vai se comportar diante da 
   * importação de cada tipo de arquivo ↓
   */
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean),
          }
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  }
}