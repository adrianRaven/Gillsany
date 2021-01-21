const MySql = require ( 'mysqli' );

let conn = new MySql ({
    host: 'localhost',
    port: 3306,
    user: 'root',
    passwd: '',
    db: 'gillsany_db'
});

let db = conn.emit(false, '');

module.exports = {
    database : db
}