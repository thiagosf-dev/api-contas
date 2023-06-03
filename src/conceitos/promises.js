'use strict'

console.log('iniciando programa...')

const dirigir = new Promise(
  (resolve, reject) => {
    const temGasolina = false

    if (temGasolina) {
      return resolve('O carro ligou...')
    }

    return reject('O carro está sem combustível...')
  }
)

console.log(typeof dirigir)
console.log('dirigir', dirigir)

dirigir
  .then((result) => {
    console.log('result: ', result)
  })
  .catch((error) => {
    console.log('error: ', error)
  })

// console.log('1')
// console.log('2')
// console.log('3')
// console.log('4')
// console.log('5')
console.log('finalizando programa...')