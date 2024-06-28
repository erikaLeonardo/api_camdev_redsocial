const express = require('express');
const passport = require('passport');
const AmigosService = require('./../services/amigos.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createAmigoSchema, updateAmigoSchema, getAmigoSchema, getAmigo1Schema, getAmigoDetail } = require('./../schemas/amigo.schema');

const router = express.Router();
const service = new AmigosService();


router.get('/',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const get_amigo = await service.find();
    res.json(get_amigo);
  } catch (error) {
    next(error);
  }
});

router.get('/:id_amistad',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getAmigoSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id_amistad } = req.params;
      const get_amistad = await service.findOne(id_amistad);
      res.json(get_amistad);
    } catch (error) {
      next(error);
    }
  })

router.get('/amistad/:id_amigo1',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getAmigo1Schema, 'params'),
  async (req, res, next) => {
    try {
      const { id_amigo1 } = req.params;
      const get_id_amigo1 = await service.findByIdAmigo1(id_amigo1);
      res.json(get_id_amigo1);
    } catch (error) {
      next(error);
    }
  });

router.get('/detalle_amistad/:id_amigo1/:id_amigo2',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getAmigoDetail, 'params'),
  async (req, res, next) => {
    try {
      const { id_amigo1, id_amigo2 } = req.params;
      const get_id_amigo1 = await service.find_amistad_detail(id_amigo1, id_amigo2);
      res.json(get_id_amigo1);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createAmigoSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const nuevaAmistad = await service.create(body);
    res.status(201).json(nuevaAmistad);
  });


//Borrar registro de reaccion
router.delete('/:id_amistad',
  passport.authenticate('jwt', {session: false}),
  async (req, res) => {
  const { id_amistad } = req.params;
  const respuesta = await service.delete(id_amistad);
  res.json({ message: "Registro eliminado exitosamente", respuesta });
});

module.exports = router;
