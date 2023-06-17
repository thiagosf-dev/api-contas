'use strict'

const express = require('express');
const router = express.Router();

const usuarioService = require('../services/UsuarioService');

router.post('/', async (req, res) => {
  res.json(await usuarioService.cadastrar(req.body));
});

router.get('/', async (req, res) => {
  res.json(await usuarioService.listar());
});

router.get('/:id', async (req, res) => {
  res.json(await usuarioService.buscarPorId(req.params.id));
});

router.put('/:id', async (req, res) => {
  return res.json(await usuarioService.editar(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
  return res.json(await usuarioService.excluir(req.params.id));
});

module.exports = router;
