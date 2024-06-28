const express = require('express');

const notificacionesRouter = require('./notificaciones.router');
const accionesRouter = require('./acciones.router');
const reaccionesRouter = require('./reacciones.router');
const amigosRouter = require('./amigos.router');
const comentarioRouter = require('./comentario.router');
const usuarioRouter = require('./usuario.router');
const publicacionRouter = require('./publicacion.router');
const tipoPrivacidadRouter = require('./tipo_privacidad.router');
const compartirRouter = require('./compartidos.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/notificaciones', notificacionesRouter);
  router.use('/acciones', accionesRouter);
  router.use('/reacciones', reaccionesRouter);
  router.use('/amigos', amigosRouter);
  router.use('/comentarios', comentarioRouter);
  router.use('/usuarios', usuarioRouter);
  router.use('/publicaciones', publicacionRouter);
  router.use('/tipoprivacidad', tipoPrivacidadRouter);
  router.use('/compartidos', compartirRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
