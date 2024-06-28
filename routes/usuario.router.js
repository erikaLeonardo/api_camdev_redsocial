const express = require('express');
const passport = require('passport');

const router = express.Router();
const UsuarioService = require('../services/usuario.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createUsuarioSchema, updateUsuarioSchema, getUsuarioSchema } = require('../schemas/usuario.schema');

const service = new UsuarioService();

router.get('/',
  // passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get('/:id_usuario',
  // passport.authenticate('jwt', {session: false}),
  validatorHandler(getUsuarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id_usuario } = req.params;
      const user = await service.findOne(id_usuario);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  // passport.authenticate('jwt', {session: false}),
  validatorHandler(createUsuarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUser = await service.create(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id_usuario',
  // passport.authenticate('jwt', {session: false}),
  validatorHandler(getUsuarioSchema, 'params'),
  validatorHandler(updateUsuarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id_usuario } = req.params;
      const body = req.body;
      const user = await service.update(id_usuario, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id_usuario',
  // passport.authenticate('jwt', {session: false}),
  validatorHandler(getUsuarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id_usuario } = req.params;
      const result = await service.delete(id_usuario);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
