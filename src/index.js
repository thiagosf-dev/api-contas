// Usar variáveis não declaradas gera um erro;
// Usar uma variável não declarada dentro de uma também gera erro;
// Mudar valor de uma propriedade que não é writeable gera erro;
// Deletar um objeto ou variável não é permitido;
// Deletar funções também não é permitido;
// Duplicação de parâmetros em função também não é permitido;
// Modificar uma propriedade getter de um objeto não é permitido;
// Não se pode deletar propriedades undeleteable;
// Não se pode utilizar eval como nome de variável;
// Enfim, o strict mode te ajuda a escrever um código mais seguro e consistente
'use strict'

require('dotenv').config();
const api = require('./server');

const PORT = process.env.PORT || 3000;


// ********** EXPLICAÇÃO TEÓRICA SOBRE FUNÇÕES ANÔNIMAS E ARROW ********** //

// FUNÇÃO NOMEADA
// function teste1(n1, n2) {
//   return n1 + n2
// }
// const resultado1 = teste1(10, 10)
// console.log('resultado1: ', resultado1)

// // FUNÇÃO ANÔNIMA
// const teste2 = function (n1, n2) {
//   return n1 + n2
// }
// const resultado2 = teste2(10, 20)
// console.log('resultado2: ', resultado2)

// // FUNÇÃO ARQUEADA (ARROW): () => {}
// const teste3 = (n1, n2) => {
//   return n1 + n2
// }
// const resultado3 = teste3(10, 30)
// console.log('resultado3: ', resultado3)

// // quando a função tem apenas uma linha para ser executada, pode omitir as '{}'
// const teste4 = () => console.log('função teste4() foi chamada')
// teste4()

// // quando a função não tem parâmetro, pode substituir os '()' pelo '_'
// const teste5 = _ => console.log('função teste5() foi chamada')
// teste5()
// ********** EXPLICAÇÃO TEÓRICA SOBRE FUNÇÕES ANÔNIMAS E ARROW ********** //

// DEVE INSTALAR A DEPENDÊNCIA 'nodemon' COM O COMANDO: npm i nodemon
// DEVE AJUSTAR O SCRIPT 'start' NO ARQUIVO 'package.json'
api.listen(
  PORT,
  () => console.info(`Servidor rodando... http://localhost:${PORT}`)
);