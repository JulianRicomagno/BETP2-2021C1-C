/**
 * En el siguiente array de objetos (beers)
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 * 2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta 
 * propiedad debe tener solo  * el nombre del archivo de la propiedad label 
 * (upload_xOMnlK-large.png, etc..)
 * 3.- Desarrollo una funcion que ordene por tipo (type)
 * 
 
 /*
  Beers
*/
const beers = [
    { name: 'Purple Iris', abv: 6.8, label: 'https://s3.amazonaws.com/brewerydbapi/beer/dMLwGo/upload_yiUllE-large.png', type: 'IPA' },
    { name: 'Orange Blossom Pilsner', abv: 5.5, label: 'https://s3.amazonaws.com/brewerydbapi/beer/Rczcb9/upload_9Nhxxl-large.png', type: 'Pilsner' },
    { name: 'Darkness', abv: 4.2, label: 'https://s3.amazonaws.com/brewerydbapi/beer/lnxbIV/upload_idNXFf-large.png', type: 'Stout' },
    { name: 'Belgian Wit', abv: 5.4, label: 'https://s3.amazonaws.com/brewerydbapi/beer/3CvVQG/upload_xOMnlK-large.png', type: 'Wheat' },
    { name: 'Stolen Fruit', abv: 4.6, label: 'https://s3.amazonaws.com/brewerydbapi/beer/YGT30k/upload_uVCHP7-large.png', type: 'Wheat' },
  ];
/*
 * 1.- Desarrollar una function que retorne un array que incluya el precio segun el siguiente criterio
 *     a) Si el  grado alcoholico es < a 5.0 el precio es 300
 *     b) Si el grado alcoholico es >= 5.0 el precio es 350
 *     c) La cerveza 'Purple Iris' esta de oferta y si precio es 320
 */

function actPrice() {
  const miArrayPrice=[];
  for (const item of beers) {
    miArrayPrice.push(myfunction(item));
  }
  console.log(miArrayPrice);
}

function myfunction(item) {
  let price = 0;
  if(item.name === 'Purple Iris'){
    price = 320;
  } 
  if(item.abv >= 5.0){
    price = 350;
  } 
  else{
    price = 300
  }  
  return {name: item.name,abv: item.abv, label: item.label, type: item.type, price: price};
}

console.log(actPrice());

/*
2.- Desarrolle una función que inserte la propiedad file_name a cada uno de los objetos, esta 
 * propiedad debe tener solo  * el nombre del archivo de la propiedad label 
 * (upload_xOMnlK-large.png, etc..)
 * 
 */

function agregarFileName() {
  beers.forEach(beer => beer.file_name = beer.label.slice(-23));
  console.log(beers); 
}

console.log(agregarFileName());

/*
3.- Desarrollo una funcion que ordene por tipo (type)
*/

console.log(beers.sort(function (a, b) {
  if (a.tye > b.type) {
    return 1;
  }
  if (a.type < b.type) {
    return -1;
  }
  // a must be equal to b
  return 0;
}));
