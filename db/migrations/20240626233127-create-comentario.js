'use strict';

const { ComentarioSchema, COMENTARIO_TABLE } = require('./../models/comentario.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(COMENTARIO_TABLE, ComentarioSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(COMENTARIO_TABLE);
  }
};
