'use strict';

const { PublicacionSchema, PUBLICACION_TABLE } = require('./../models/publicacion.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(PUBLICACION_TABLE, PublicacionSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(PUBLICACION_TABLE);
  }
};
