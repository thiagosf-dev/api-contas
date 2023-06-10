'use strict'

const express = require('express');
const router = express.Router();

// const { verificarToken } = require('../middlewares/AutenticacaoMiddleware');
const usuarioService = require('../services/UsuarioService');

router.post('/', async (req, res) => {
  try {
    const resposta = await usuarioService.cadastrar(req.body);
    res.json(resposta);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.get('/', async (req, res) => {
  try {
    const resposta = await usuarioService.listar();
    res.json(resposta);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.get('/:id', async (req, res) => {
  const resposta = await usuarioService.buscarPorId(req.params.id);
  res.json(resposta);
});

router.put('/:id', async (req, res) => {
  try {
    const resposta = await usuarioService.editar(
      req.params.id,
      req.body
    );
    return res.json(resposta);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const resposta = await usuarioService.excluir(req.params.id)
    return res.json(resposta);
  } catch (error) {
    console.error(error);
    res.json(error);
  }
});

module.exports = router;
