'use strict'

const express = require('express');
const router = express.Router();

// const { verificarToken } = require('../middlewares/AutenticacaoMiddleware');
const contaService = require('../services/ContaService');
const AutenticacaoMiddleware = require('../middlewares/AutenticacaoMiddleware');

// router.post('/', AutenticacaoMiddleware.verificarToken, async (req, res) => {
//   try {
//     const resposta = await contaService.cadastrar(req.body);
//     res.json(resposta);
//   } catch (error) {
//     console.error(error);
//     res.json(error);
//   }
// });

router.post('/', async (req, res) => {
  res.json(await contaService.cadastrar(req.body));
});

router.get('/', AutenticacaoMiddleware.verificarToken, async (req, res) => {
  res.json(await contaService.listar());
});

router.get('/:id', async (req, res) => {
  res.json(await contaService.buscarPorId(req.params.id));
});

router.put('/:id', async (req, res) => {
  return res.json(await contaService.editar(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
  return res.json(await contaService.excluir(req.params.id));
});

router.get('/usuario/:id', async (req, res) => {
  res.json(await contaService.buscarPorUsuarioId(req.params.id));
})

module.exports = router;
