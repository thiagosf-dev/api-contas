'use strict'

let contas = []

const r = fetch('http://localhost:3000/contas')
  .then(response => response.json())
  .then(contasAPI => {
    contas = contasAPI
    console.log('contas', contas)
    // montarTabela()
  })

montarTabela()

function montarTabela() {
  const tabela = document.getElementById("tabela")

  for (let i = 0; i <= contas.length; i++) {
    tabela.innerHTML += `
      <tr>
        <td>${contas[i].id}</td>
        <td>${contas[i].descricao}</td>
        <td>${contas[i].valor}</td>
        <td>${contas[i].tipo}</td>
      </tr>
    `
  }
}