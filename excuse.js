
let who = ['the dog','my granma','his turtle','my bird'];
let action = ['eat','pissed','crushed','broked'];
let item = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function getRandomItem (list){
  return list[(Math.floor(Math.random() * list.length))];
}

let result = `${getRandomItem(who)} ${getRandomItem(action)} ${getRandomItem(item)} ${getRandomItem(when)}`;
document.getElementById("impre").innerHTML = result;
