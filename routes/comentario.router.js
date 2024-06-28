const express = require('express');
const passport = require('passport');

const ComentarioService = require('./../services/comentarios.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createComentarioSchema,
  updateComentarioSchema,
  getComentarioSchema,
  getCountComentario,
  queryComentarioByUserSchema}= require('./../schemas/comentario.schema')

const router = express.Router();
const service = new ComentarioService();

router.get('/',
  passport.authenticate('jwt', {session: false}),
  async (req, res, next) => {
  try {
    const get_comentarios = await service.find();
    res.json(get_comentarios);
  } catch (error) {
    next(error);
  }
});

//para recuperar el número total de comentarios por publicación
router.get('/comentarios_publicacion/:id_publicacion',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getCountComentario, 'params'),
  async (req, res, next) => {
    try {
      const get_comentarios = await service.countComentario(req.params);
      res.json(get_comentarios);
    } catch (error) {
      next(error);
    }
  });

//Para recuperar los comentarios pertenecientes a una sola publicación.
router.get('/comentarios_detail/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(queryComentarioByUserSchema, 'query'),
  async (req, res, next) => {
    try {
      const get_comentarios = await service.findByComentario(req.query);
      res.json(get_comentarios);
    } catch (error) {
      next(error);
    }
  });

//Busqueda de comentario por medio de su id
router.get('/:id_comentario',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getComentarioSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id_comentario } = req.params;
      const get_acciones = await service.findOne(id_comentario);
      res.json(get_acciones);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createComentarioSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const nuevoComentario = await service.create(body);
    res.status(201).json(nuevoComentario);
  });

router.patch('/:id_comentario',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getComentarioSchema, 'params'),
  validatorHandler(updateComentarioSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id_comentario } = req.params;
      const body = req.body;
      const comentario = await service.update(id_comentario, body);
      res.json(comentario);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id_comentario',
  passport.authenticate('jwt', {session: false}),
  async (req, res) => {
  const { id_comentario } = req.params;
  const respuesta = await service.delete(id_comentario);
  res.json(respuesta);
});

module.exports = router;

