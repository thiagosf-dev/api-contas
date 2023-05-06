# API de Gereciamento de Contas

> Projeto do módulo de backend do curso da HT - TURMA 43

## Passo a passo de como esse projeto foi construído

1. entre em uma pasta de sua preferência do seu computador pelo **vscode** através das teclas de atalho `ctrl + k + o`
1. configure o projeto como sendo gerenciado pelo `git` com o comando: `git init`
1. configure o `npm` como o gerenciador de dependências do projeto com o comando: `npm init -y`
1. crie na raíz do projeto o arquivoi `.gitignore` e deixe da seguinte forma:

    ```.gitignore
      /node_modules/
    ```

1. instale a dependência do **express** com o comando:  `npm i express`
1. instale a dependência do **nodemon** com o comando: `npm i nodemon`
1. instale a dependência do **cors** com o comando: `npm i cors`
1. altere o arquivo `package.json` na parte de scripts, para ficar da seguinte forma:

    ```JSON
      "scripts": {
        "start": "npx nodemon ."
      },
    ```

1. crie o arquivo `server.js` dentro da pasta `src`
1. no arquivo `server.js`, configuramos a `API - backend (servidor)` da seguinte forma:

    ```JS
      'use strict'

      const express = require('express')
      const cors = require('cors')

      const api = express()

      api.use(express.json)

      api.use(cors({
        origin: '*'
      }))

      api.get('/', (request, response) => {
        response.json({
          status: 'OK',
          message: 'API rodando com sucesso'
        })
      })

      module.exports = api
    ```

1. crie o arquivo `index.js` dentro da pasta `src`
1. no arquivo `index.js`, configuramos a `API - backend (servidor)` da seguinte forma:

    ```JS
      'use strict'

      const api = require('./server')
      const PORT = 3000

      console.log('api', api)

      api.listen(
        PORT,
        () => console.info(`Servidor rodando na porta ${PORT} em: http://localhost:${PORT}`)
      )
    ```

1. rode o servidor com o seguinte comando: `npm start`
