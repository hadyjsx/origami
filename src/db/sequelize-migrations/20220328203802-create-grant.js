'use strict';
export default {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Grants', {
			Uuid: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				primaryKey: true,
			},
			UserUuid: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'Users',
					key: 'Uuid',
					as: 'UserUuid',
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			RoleUuid: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'Roles',
					key: 'Uuid',
					as: 'RoleUuid'
				},
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE',
			},
			CreatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			UpdatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Grants');
	}
};