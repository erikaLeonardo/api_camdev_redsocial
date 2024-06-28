'use strict';

const { NotificacionSchema, NOTIFICACION_TABLE } = require('./../models/notificacion.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(NOTIFICACION_TABLE, NotificacionSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(NOTIFICACION_TABLE);
  }
};
