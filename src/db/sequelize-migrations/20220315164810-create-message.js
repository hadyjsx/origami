'use strict';
export default {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Messages', {
			Uuid: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
			},
			Title: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			Text: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			CreatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			UpdatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Messages');
	}
};