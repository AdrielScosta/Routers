(async()=>{
    const database = require('./db.js')
    const user = require('./user.js')
    await database.sync()
})()