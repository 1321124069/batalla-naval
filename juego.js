var barcos = 0;
var barcosj2 = 0;
var arreglo = creartablero();
var arreglo2 = creartablero2();
var div = document.getElementById("tablero1");
var div2 = document.getElementById("tablero2");
var tablero1 = document.getElementById("jug1");
var tablero2 = document.getElementById("jug2");
var empezar = document.getElementById("");
var estado = 1;
var turnos = 1;
var barcos1 = 0;
var barcos2 = 0;
var barcosAtina1 = 0;
var barcosAtina2 = 0;

console.log(arreglo);
console.log(arreglo2);

insertabotones();
//se crea el tablero del  jugador 1
function creartablero() {
  let arreglo = [];
  for (let e = 0; e < 10; e++) {
    arreglo[e] = [];
    for (f = 0; f < 10; f++) {
      arreglo[e][f] = 0;
    }
  }
  return arreglo;
}

//se crea el tablero del jugador 2
function creartablero2() {
  let arreglo2 = [];
  for (let e = 0; e < 10; e++) {
    arreglo2[e] = [];
    for (f = 0; f < 10; f++) {
      arreglo2[e][f] = 0;
    }
  }
  return arreglo2;
}

//se insertan los botones en el tablero del jugador 1
function insertabotones() {
  tablero1.style.display = "inline";
  div2.style.display = "none";
  let top = 0;
  for (let i = 0; i < 10; i++) {
    let left = 0;
    for (let a = 0; a < 10; a++) {
      let boton = document.createElement("button");
      boton.id = "boton" + i + a;
      boton.classList = "boton";
      boton.style.left = left + "%";
      boton.style.top = top + "%";
      boton.style.position = "absolute";
      boton.addEventListener("click", () => {
        let id = boton.id;
        console.log(boton);
        botonapret(id);
      });
      div.appendChild(boton);
      left += 10;
    }
    top += 10;
  }
}

//se insertan botones en el tablero del jugador 2
function insertabotones2() {
  div.style.display = "none";
  let top = 0;
  for (let i = 0; i < 10; i++) {
    let left = 0;
    for (let a = 0; a < 10; a++) {
      let boton = document.createElement("button");
      boton.id = "boton2" + i + a;
      boton.classList = "boton";
      boton.style.left = left + "%";
      boton.style.top = top + "%";
      boton.style.position = "absolute";
      boton.onclick = function () {
        let id = boton.id;
        botonapret2(id);
      };
      div2.appendChild(boton);
      left += 10;
    }
    top += 10;
  }
}

//jug2
function botonapret2(id) {
  var posicionx = parseInt(id[6]);
  var posiciony = parseInt(id[7]);
  if (arreglo2[posicionx][posiciony] == 0) {
    if (barcosj2 < 3) {
      console.log(barcosj2);

      let barcoanch = parseInt(prompt("de que anche quieres el barco " + "\n" + " 1, 2, 3 o 4"));
      if(barcoanch <= 4){
        barcos2 += barcoanch;
      for (let g = 0; g < 1; g++) {
        console.log(posicionx);
        console.log(posiciony);
        barcosj2++;
        console.log(barcosj2);
        arreglo2[posicionx][posiciony] = 1;
        //experimento
        if (barcoanch > 4) {
          alert(
            "esa cantidad es mas de lo que se te pidio mijo recapacita y vuelve a colocar tu barco"
          );
          //colocar sentencia para que no se siga ejecutando codigo
        }

        if (posiciony <= 8) {
          for (let i = 0; i < barcoanch - 1; i++) {
            posiciony += 1;
            arreglo2[posicionx][posiciony] = 1;
          }
        }

        if (posiciony == 9) {
          for (let i = 0; i < barcoanch - 1; i++) {
            posiciony -= 1;
            arreglo2[posicionx][posiciony] = 1;
          }
        }
      }
      console.log("bracos: " + barcosj2);
      console.log(arreglo2);
      }else{
        alert("esa cantidad es mas de lo que se te pidio mijo recapacita y vuelve a colocar tu barco");
      }
    }
    if (barcosj2 == 3) {
      alert("ya colocastes todos tus barcos");
      aparecebtonconfi2();
    }
  } else {
    alert("En esa posicion ya hay un barco");
  }
}

//jug1
function botonapret(id) {
  var posicionx = parseInt(id[5]);
  var posiciony = parseInt(id[6]);
  if (arreglo[posicionx][posiciony] == 0) {
    if (barcos < 3) {
      let barcoanch = parseInt(prompt("de que anche quieres el barco " + "\n" + " 1, 2, 3 o 4"));
        if(barcoanch <= 4){
          barcos1 += barcoanch;
        for (let g = 0; g < 1; g++) {
          console.log(posicionx);
          console.log(posiciony);
          barcos++;
          console.log(barcos);
          arreglo[posicionx][posiciony] = 1;

          if (posiciony <= 8) {
            for (let i = 0; i < barcoanch - 1; i++) {
              posiciony += 1;
              arreglo[posicionx][posiciony] = 1;
            }
          }

          if (posiciony == 9) {
            for (let i = 0; i < barcoanch - 1; i++) {
              posiciony -= 1;
              arreglo[posicionx][posiciony] = 1;
            }
          }
        }
      }else{
        alert("esa cantidad es mas de lo que se te pidio mijo recapacita y vuelve a colocar tu barco");
      }
    }
    if (barcos == 3) {
      alert("ya colocastes todos tus barcos");
      aparecebtonconfi1();
    }
  } else {
    alert("En esa posicion ya hay un barco");
  }
}

function botonempe() {
  if (barcosj2 == 3) {
    empezar.style.display = "inline";
  }
}

//aver que pasa
function aparecebtonconfi1() {
  let confi1 = document.getElementById("contij1");
  confi1.style.display = "inline";
  confi1.value = "continuar";
  confi1.onclick = function () {
    alert("turno del jugador 2 de colocar sus barcos");
    div.style.display = "none";
    insertabotones2();
    div2.style.display = "inline";
    alert("tablero jug2");
    tablero1.style.display = "none";
    tablero2.style.display = "inline";
    confi1.style.display = "none";
    console.log(arreglo);
    estado++;
  };
}

function aparecebtonconfi2() {
  let confi2 = document.getElementById("contij2");
  let texto = document.getElementById("textojug2");
  confi2.style.display = "inline";
  confi2.onclick = function () {
    alert("El juego ha empezado");
    div2.style.display = "none";
    confi2.style.display = "none";
    texto.style.display = "none";
    insertabotonesata1();
    insertabotonesata2();
    alert("Es turno del jugador 1");
    let texto1 = document.getElementById("div-texto1");
    texto1.style.display = "inline";
    let texto2 = document.getElementById("div-texto2");
    texto2.style.display = "inline";
    deshabilitarBotones();
  };
}
function deshabilitarBotones(){
  let boton;
    for(let i=0; i<10; i++){
      for(let a=0; a<10;a++){
        if(turnos == 1){
          boton = document.getElementById("botonata2" + i + a);
        }else{
          boton = document.getElementById("botonata1" + i + a);
        }
        boton.disabled = true;
      }
    }
}
function habilitarBotones(){
  let boton;
    for(let i=0; i<10; i++){
      for(let a=0; a<10;a++){
        if(turnos == 1){
          boton = document.getElementById("botonata1" + i + a);
        }else{
          boton = document.getElementById("botonata2" + i + a);
        }
        boton.disabled = false;
      }
    }
}
function juego(x, y){
  console.log(x + " " + y);
  if(barcosAtina1 == barcos2 || barcosAtina2 == barcos1){
    if(barcosAtina1 == barcos2){
      alert("El ganador es el jugador 1");
    }else{
      alert("El ganador es el jugador 2");
    }
  }else{
    if(turnos == 1){
      if(arreglo2[x][y] == 1){
        alert("Le has atinado a una parte del barco");
        arreglo2[x][y] = 0;
        barcosAtina1 += 1;
      }else{
        alert("No has atinado a ningun barco");
      }
      turnos = 2;
    }else{
      if(arreglo[x][y] == 1){
        alert("Le has atinado a una parte del barco");
        arreglo[x][y] = 0;
        barcosAtina2 += 1;
      }else{
        alert("No has atinado a ningun barco");
      }
      turnos = 1;
    }
    alert("Es turno del jugador " + turnos);
    habilitarBotones();
    deshabilitarBotones();
  }
}
function insertabotonesata1() {
    let ataca1 = document.getElementById('ataca1');
    ataca1.style.display = "inline";
    let top = 0;
    for (let i = 0; i < 10; i++) {
      let left = 0;
      for (let a = 0; a < 10; a++) {
        let boton = document.createElement("button");
        boton.id = "botonata1" + i + a;
        boton.classList = "boton";
        boton.style.left = left + "%";
        boton.style.top = top + "%";
        boton.style.position = "absolute";
        boton.onclick = function () {
          let id = boton.id;
          let x = parseInt(id[9]);
          let y = parseInt(id[10]);
          juego(x, y);
        };
        ataca1.appendChild(boton);
        left += 10;
      }
      top += 10;
    }
}

function insertabotonesata2() {
    let ataca2 = document.getElementById('ataca2');
    ataca2.style.display = "inline";
    let top = 0;
    for (let i = 0; i < 10; i++) {
      let left = 0;
      for (let a = 0; a < 10; a++) {
        let boton = document.createElement("button");
        boton.id = "botonata2" + i + a;
        boton.classList = "boton";
        boton.style.left = left + "%";
        boton.style.top = top + "%";
        boton.style.position = "absolute";
        boton.onclick = function () {
          let id = boton.id;
          let x = id[9];
          let y = id[10];
          juego(x, y);
        };
        ataca2.appendChild(boton);
        left += 10;
      }
      top += 10;
    }
}


