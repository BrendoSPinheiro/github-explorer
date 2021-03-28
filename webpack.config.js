const path = require('path');

module.exports = {
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
  /**
   * Informa como a aplicação vai se comportar diante da 
   * importação de cada tipo de arquivo ↓
   */
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ]
  }
}