const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	"development": {
		"username": process.env.DEV_DB_USER,
		"password": process.env.DEV_DB_PASS,
		"database": process.env.DEV_DB_NAME,
		"host": process.env.DEV_DB_HOST,
		"dialect": "postgres",
		"logging": (process.env.NODE_ENV === 'development' ? console.log : false)
	},
	"test": {
		"username": process.env.TEST_DB_USER,
		"password": process.env.TEST_DB_PASS,
		"database": process.env.TEST_DB_NAME,
		"host": process.env.TEST_DB_HOST,
		"dialect": "postgres",
		"logging": (process.env.NODE_ENV === 'development' ? console.log : false)
	},
	"production": {
		"username": process.env.PROD_DB_USER,
		"password": process.env.PROD_DB_PASS,
		"database": process.env.PROD_DB_NAME,
		"host": process.env.PROD_DB_HOST,
		"dialect": "postgres",
		"logging": (process.env.NODE_ENV === 'development' ? console.log : false)
	}
}
