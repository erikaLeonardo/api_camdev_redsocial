const express = require('express');
const passport = require('passport');

const AccionesService = require('./../services/acciones.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createAccionSchema, updateAccionSchema, getAccionSchema } = require('./../schemas/accion.schema')

const router = express.Router();
const service = new AccionesService();

router.get('/',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const get_acciones = await service.find();
    res.json(get_acciones);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getAccionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const get_acciones = await service.findOne(id);
      res.json(get_acciones);
    } catch (error) {
      next(error);
    }
  })

router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createAccionSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const nuevaAccion = await service.create(body);
    res.status(201).json(nuevaAccion);
  });

router.patch('/:id',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getAccionSchema, 'params'),
  validatorHandler(updateAccionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const accion = await service.update(id, body);
      res.json(accion);
    } catch (error) {
      next(error);
    }
  }
)
router.delete('/:id',
  passport.authenticate('jwt', {session: false}),
  async (req, res) => {
  const { id } = req.params;
  const respuesta = await service.delete(id);
  res.json(respuesta);
})
module.exports = router;

