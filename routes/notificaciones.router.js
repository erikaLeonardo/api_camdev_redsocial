const express = require('express');
const passport = require('passport');

const NotificacionesService = require('./../services/notificaciones.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  createNotificacionSchema,
  updateNotificacionSchema,
  getNotificacionSchema,
  getNotificacionesByStatus,
  changeStatusNotification,
  queryNotificacionSchema, queryNotificacionByUserSchema
} = require('./../schemas/notificacion.schema')

const router = express.Router();
const service = new NotificacionesService();

router.get('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(queryNotificacionSchema, 'query'),
  async (req, res, next) => {
    try {
      const get_notificaciones = await service.find(req.query);
      res.json(get_notificaciones);
    } catch (error) {
      next(error);
    }
  });


router.get('/find_by_user/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(queryNotificacionByUserSchema, 'query'),
  async (req, res, next) => {
    try {
      const get_notificaciones = await service.findByUser(req.query);
      res.json(get_notificaciones);
    } catch (error) {
      next(error);
    }
  });


router.get('/:id_notificacion',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getNotificacionSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id_notificacion } = req.params;
      const get_notificaciones = await service.findOne(id_notificacion);
      res.json(get_notificaciones);
    } catch (error) {
      next(error);
    }
  });

//para recuperar el número de notificaciones por leídas y no leídas
router.get('/notification_active/:id_usuario',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getNotificacionesByStatus, 'params'),
  async (req, res, next) => {
    try {
      const get_notificaciones = await service.countStatusNotification(req.params);
      res.json(get_notificaciones);
    } catch (error) {
      next(error);
    }
  });

router.patch('/:id_notificacion',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(getNotificacionSchema, 'params'),
  validatorHandler(updateNotificacionSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id_notificacion } = req.params;
      const body = req.body;
      const notificacion = await service.update(id_notificacion, body);
      res.json(notificacion);
    } catch (error) {
      next(error);

    }
  }
);

router.post('/',
  passport.authenticate('jwt', {session: false}),
  validatorHandler(createNotificacionSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const nuevaNotificacion = await service.create(body);
    res.status(200).json(nuevaNotificacion);
  });

router.delete('/:id_notificacion',
  passport.authenticate('jwt', {session: false}),
  async (req, res) => {
  const { id_notificacion } = req.params;
  try {
    const respuesta = await service.delete(id_notificacion);
    res.json(respuesta);
  } catch (error) {
    res.json({message: error.message});
  }

})
module.exports = router;

