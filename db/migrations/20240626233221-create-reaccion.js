'use strict';

const { ReaccionSchema, REACCION_TABLE } = require('./../models/reaccion.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(REACCION_TABLE, ReaccionSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(REACCION_TABLE);
  }
};
