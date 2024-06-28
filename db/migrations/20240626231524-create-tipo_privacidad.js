'use strict';

const { Tipo_Privacidad_Schema, TIPO_PRIVACIDAD_TABLE } = require('./../models/tipo_privacidad.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TIPO_PRIVACIDAD_TABLE, Tipo_Privacidad_Schema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(TIPO_PRIVACIDAD_TABLE);
  }
};
