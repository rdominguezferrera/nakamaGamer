const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    loggin: false,
})

async function checkConnection() {
    try {
        await sequelize.authenticate()
        console.log('Connection to DB has been established successfully.')

    } catch (error) {

        throw new Error (error)
    }
}

async function syncModels(value) {
    const state = {
        alter: { alter: true },
        force: { force: true },
    }

    try {
        await sequelize.sync(state[value] || '')
        
        console.log(`All models were synchronized successfully using sync(${JSON.stringify(state[value]) || ''}).`)

    } catch (error) {

        throw new Error (error)
    }
}

module.exports = {
    sequelize,
    checkConnection,
    syncModels

}