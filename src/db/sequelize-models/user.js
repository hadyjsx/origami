'use strict';
import { Model } from 'sequelize'
const User = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// Post
			User.hasMany(models.Post, { foreignKey: { onDelete: 'CASCADE', name: 'AuthorUuid', allowNull: false } })
			User.hasMany(models.Post, { as: 'EditedPost', foreignKey: { onDelete: 'SET NULL', name: 'LastEditorUuid' } })

			// Reply
			User.hasMany(models.Reply, { foreignKey: { onDelete: 'CASCADE', name: 'AuthorUuid', allowNull: false } })
			User.hasMany(models.Reply, { as: 'EditedReply', foreignKey: { onDelete: 'SET NULL', name: 'LastEditorUuid' } })

			// Grant
			User.hasMany(models.Grant, { foreignKey: { onDelete: 'CASCADE', name: 'UserUuid', allowNull: false } })

			// Engagement
			User.hasMany(models.Engagement, { foreignKey: { onDelete: 'SET NULL', name: 'UserUuid' } })

			// Favorite
			User.hasMany(models.Favorite, { foreignKey: { onDelete: 'CASCADE', name: 'UserUuid', allowNull: false } })

			// Role
			User.belongsToMany(models.Role, { through: models.Grant })

			// View
			User.hasMany(models.View, { foreignKey: { onDelete: 'SET NULL', name: 'UserUuid' } })

			// Attachment
			User.hasMany(models.Attachment, { foreignKey: { onDelete: 'CASCADE', name: 'UserUuid', allowNull: false } })
		}
	}
	User.init({
		Uuid: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		Username: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
			validate: {
				notEmpty: true,
				is: /(^[A-Za-z0-9_]+)/,
				len: [3, 15],
			},
		},
		PasswordHash: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			}
		},
		Email: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: true,
			validate: {
				isEmail: true,
				len: [5, 320],
			},
		},
		IpAddress: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				isIP: true,
				len: [3, 39],
			},
		},
		Device: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		LastVisit: {
			type: DataTypes.DATE,
			allowNull: true,
		},
		AvatarUrl: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	}, {
		sequelize,
		modelName: 'User',
		scopes: {
			hideSensitive: {
				attributes: {
					exclude: ['PasswordHash'],
				},
			},
		},
		createdAt: 'CreatedAt',
		updatedAt: 'UpdatedAt',
	});
	return User;
};

export default User