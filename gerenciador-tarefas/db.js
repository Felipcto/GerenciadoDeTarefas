const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('Banco.db')

db.serialize(()=>{
    db.run("CREATE TABLE IF NOT EXISTS tarefas(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, feito INTEGER)")
})
module.exports = db