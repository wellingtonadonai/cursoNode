const path = require('path');
// basename
console.log(path.basename(__filename)); // Exibe o nome do arquivo atual

// Nome do diretório atual
console.log(path.dirname(__filename)); // Exibe o diretório do arquivo atual

// Extensão do arquivo
console.log(path.extname(__filename)); // Exibe a extensão do arquivo atual

// objeto path
console.log(path.parse(__filename)); // Exibe um objeto com informações sobre o caminho do arquivo

// Juntar caminhos
console.log(path.join(__dirname, 'test', 'test.html'));