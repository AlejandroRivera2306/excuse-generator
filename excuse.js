function quien () {
    let who = ['the dog','my granma','his turtle','my bird'];
    let aleatorio = who[(Math.floor(Math.random() * who.length))];
    return aleatorio;
  } 
  
  function que () {
    let what = ['eat','pissed','crushed','broked'];
    let aleatorio2 = what[(Math.floor(Math.random() * what.length))];
    return aleatorio2;
  }
  
  function donde () {
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
    let aleatorio3 = when[(Math.floor(Math.random() * when.length))];
    return aleatorio3;
  }
  
  let resultado = `${quien()} ${que()} ${donde()}`;
  //typeof (resultado)
  document.getElementById("impre").innerHTML = resultado;
  