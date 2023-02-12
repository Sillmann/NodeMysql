(async () => {

  const db =require("./db");
  console.log("comecou");
  console.log('SELECT * FROM MENSAGEM');
  const mensagem = await db.selectMensagem();
  console.log(mensagem);

})();

