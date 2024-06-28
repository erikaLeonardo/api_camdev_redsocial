'use strict';

const { AmigoSchema, AMIGO_TABLE } = require('./../models/amigo.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(AMIGO_TABLE, AmigoSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(AMIGO_TABLE);
  }
};
