async function connect(){
  if (global.connection && global.connection.state != 'disconnected')
    return global.connection;

  const mysql = require("mysql2/promise");
  // const connection = await mysql.createConnection("mysql://root:XXXXX@localhost:3306/crud");
  
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'XXXXXX',
    database: 'crud'
  }); 
  
  console.log("conectou mysql");
  global.connection = connection;

  return connection;
}

// connect();

async function selectMensagem(){
   const conexao = await connect();
   const [rows] = await conexao.query('SELECT * FROM MENSAGEM');
   return rows;
}


module.exports = {selectMensagem}
