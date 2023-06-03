try {
  // throw new Error('Ocorreu um erro...')
  console.log('Sistema iniciado')
}
catch (error) {
  console.log('error', error)
  // throw new Error(error)
}
finally {
  console.log('Sistema finalizado...')
}