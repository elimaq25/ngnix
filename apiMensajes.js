const { default: knex } = require("knex");

class MessageManager
{
    db_;
    tabla_;
    
    constructor (db, tabla) 
    {
        this.db_=db
        this.tabla_=tabla

    }


    addMessage(mensaje)
    {
        this.db_(this.tabla_).insert(mensaje)
        .then(() => console.log('agregado'))
        .catch((err) => {console.log(err); throw err})
        .finally(() => {
            this.db_.destroy()
        })
    }

    getMessages()
    {
        let mensajes = []

        return this.db_.from(this.tabla_).select('*')
        .then((rows) => {
            
            for (let row of rows)
            {
                mensajes.push(row)
            }
            return mensajes

        })
        
        .catch((err) => {console.log(err); throw err})  
    }
}


module.exports = MessageManager