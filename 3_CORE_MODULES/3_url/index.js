const url = require ('url');
const address = 'https://www.mercadolivre/products/12345?pesquisa=cadeira';
const parsedurl = new url.URL(address);

console.log(parsedurl.host); // www.mercadolivre
console.log(parsedurl.pathname); // /products/12345
console.log(parsedurl.search); // ?pesquisa=cadeira
console.log(parsedurl.searchParams); // ?pesquisa=cadeira
console.log(parsedurl.searchParams.get('pesquisa')); // cadeira