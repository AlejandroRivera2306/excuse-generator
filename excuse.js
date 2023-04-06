
    let who = ['the dog','my granma','his turtle','my bird'];
    let action = ['eat','pissed','crushed','broked'];
    let cosa = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
  function random (lista){
  return lista[(Math.floor(Math.random() * lista.length))];
  }
  let resultado = `${random(who)} ${random(action)} ${random(cosa)} ${random(when)}`;
  document.getElementById("impre").innerHTML = resultado;
