'use strict';

const { UsuarioSchema, USUARIO_TABLE } = require('./../models/usuario.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USUARIO_TABLE, UsuarioSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USUARIO_TABLE);
  }
};
