'use strict'

const dirigir = new Promise(
  (resolve, reject) => {
    const temGasolina = true

    if (temGasolina) {
      resolve('O carro ligou...')
    }

    reject('O carro está sem combustível...')
  }
)

async function testarAsyncAwait() {
  try {
    const resultado = await dirigir
    console.log('resultado: ', resultado)
    return resultado
  } catch (error) {
    console.error(error)
  }
}

testarAsyncAwait()