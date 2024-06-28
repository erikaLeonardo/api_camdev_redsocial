'use strict';

const { CompartirSchema, COMPARTIR_TABLE } = require('./../models/compartir.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(COMPARTIR_TABLE, CompartirSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(COMPARTIR_TABLE);
  }
};
