"use strict";

const express = require("express");
const router = express.Router();

const loginService = require("../services/LoginService");

router.post("", async (req, res) => {
  const result = await loginService.autenticar(req.body);

  if (!result.success) {
    return res.status(404).json(result);
  }

  return res.json(result);
});

module.exports = router;
