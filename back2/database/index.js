const { Sequelize } = require('sequelize')
const connection = new Sequelize('NAKAMA2','Ramses','reboot',{
    host: 'localhost',
    dialect:'mysql',
})

const checkConnection = async () => {

    try {
        await connection.authenticate();
        console.log('connection to database has been started successfully')
        
    } catch (error) {

        console.log("error in connection");
        throw new Error(error)
       
        
    }
}


const checkSyncModels = async () => {

    const state = {
      alter: { alter: true },
      force: { force: true },
    };

    try {

        await connection.sync();
        console.log('modells syncronished successfully with database')
        
    } catch (error) {

         console.log("error to syncronish modells");
         throw new Error(error);
       
        
    }

}

module.exports = { connection, checkConnection,checkSyncModels };