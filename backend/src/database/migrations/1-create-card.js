'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('cards', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING,
        },
        linkedin: {
          type: Sequelize.STRING
        },
        github: {
          type: Sequelize.STRING
        },
       });
     
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('cards');
  }
};
