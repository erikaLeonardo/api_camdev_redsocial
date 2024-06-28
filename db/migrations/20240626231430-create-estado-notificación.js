'use strict';

const { Estado_Notificacion_Schema, ESTADO_NOTIFICACION_TABLE } = require('../models/estado_notificacion.model');

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable(ESTADO_NOTIFICACION_TABLE, Estado_Notificacion_Schema);
      console.log(`Tabla ${ESTADO_NOTIFICACION_TABLE} creada exitosamente.`);
    } catch (error) {
      console.error(`Error al crear la tabla ${ESTADO_NOTIFICACION_TABLE}:`, error);
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.dropTable(ESTADO_NOTIFICACION_TABLE);
      console.log(`Tabla ${ESTADO_NOTIFICACION_TABLE} eliminada exitosamente.`);
    } catch (error) {
      console.error(`Error al eliminar la tabla ${ESTADO_NOTIFICACION_TABLE}:`, error);
    }
  }
};
