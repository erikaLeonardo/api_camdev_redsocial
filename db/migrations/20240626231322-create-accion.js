'use strict';

const { AccionSchema, ACCION_TABLE } = require('./../models/accion.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ACCION_TABLE, AccionSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ACCION_TABLE);
  }
};
