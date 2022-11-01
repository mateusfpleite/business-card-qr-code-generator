module.exports = {
    up: async (queryInterface, _Sequelize) => {
        await queryInterface.bulkInsert('cards', [
            {
                name: 'Mateus Leite',
                description: 'FullStack developer with knowledge in Javascript, React, NodeJS, MySQL',
                linkedin: 'https://www.linkedin.com/in/mateusfpleite/',
                github: 'https://github.com/mateusfpleite',
            }
        ])
    },
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});
    },
}