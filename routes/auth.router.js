const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');

const { config } = require('./../config/config');

// Ruta de autenticación POST para login
router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const usuario = req.user;
      const paylod = {
        sub: usuario.id_usuario,
      }
      const token = jwt.sign(paylod, config.jwtSecret);
      res.json({
        usuario,
        token
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
