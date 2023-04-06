function quien () {
    let who = ['the dog','my granma','his turtle','my bird'];
    let aleatorio = who[(Math.floor(Math.random() * who.length))];
    return aleatorio;
  } 
  
  function action () {
    let action = ['eat','pissed','crushed','broked'];
    let aleatorio2 = action[(Math.floor(Math.random() * action.length))];
    return aleatorio2;
  }

  function cosa(){
    let what = ['my homework', 'the keys', 'the car'];
    let aleatorio4 = what[(Math.floor(Math.random() * what.length))];
    return aleatorio4;

  }
  
  function donde () {
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
    let aleatorio3 = when[(Math.floor(Math.random() * when.length))];
    return aleatorio3;
  }
  
  let resultado = `${quien()} ${action()} ${cosa()} ${donde()}`;
  //typeof (resultado)
  document.getElementById("impre").innerHTML = resultado;
  