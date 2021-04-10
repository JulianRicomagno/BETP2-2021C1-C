/**
 * Dada un conjunto de medias debe encontrar la cantidad de pares por color.
 * Se proporciona un array el cual contiene el codigo de color de las medias
 * Determinar el numero maximo de pares del mismo color que se puede formar
 *
 */

/**
 *
 * @param {Array} colorSocks
 * @return {Number}
 */

/*const media = [1, 2, 1, 3, 3]*/

function sockMerchant (colorSocks){
  let uniqueItems = Array.from(new Set(colorSocks));
  let cont = 0;
  let acum = 0;
  for (var medias of uniqueItems) {
    cont = contarPar(colorSocks, medias);
    if(cont >= 1 && (cont % 2 === 1)){
      cont -= 1;
    }
    acum += cont;
  }
  return parseInt(acum/2);
};

function contarPar (sock, medias){
  let cont = 0;
  for (var miSock of sock) {
    if(miSock == medias){
        cont += 1;
    };
  };
  return cont;
}

// TESTS TDD
console.log(sockMerchant([1, 2, 1, 2, 1, 3, 2]) === 2);
console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]) === 3);
