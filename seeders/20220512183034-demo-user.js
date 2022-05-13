'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'Aitor',
      password: '1234',
      email: 'afuentes@gmail.com',
      
     }], {});

     await queryInterface.bulkInsert('users', [{
      username: 'Sergio',
      password: '1234',
      email: 'samarilla@gmail.com',
      
     }], {});

     await queryInterface.bulkInsert('users', [{
      username: 'Angel',
      password: '1234',
      email: 'anavarrete@gmail.com',
      
     }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
