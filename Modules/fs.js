const fs = require('fs');
const path = require('path');

// Criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (err) => {
    if (err) {
       return console.error('Erro ao criar a pasta:', err);
    }
  
  console.log('Pasta criada com sucesso!');
});

// Criar um arquivo
fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Olá, mundo!', (err) => {
    if (err) {
        return console.error('Erro ao criar o arquivo:', err);
    }
  
    console.log('Arquivo criado com sucesso!');
});