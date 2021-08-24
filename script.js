const productList = document.getElementById('products-list');

console.log(productList);

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

// fetch("https://world.openfoodfacts.org/api/v0/product/04963406", requestOptions)
//   .then(response => response.json())
//   .then(result => console.log(result.product))
//   .catch(error => console.log('error', error)
// );


const categories =  fetch("https://br.openfoodfacts.org/categories.json", requestOptions)
  .then(response => response.json())
  .then(result => result.tags)
  .catch(error => console.log('error', error)
);

categories.then(result => result.forEach(element => {
    console.log(element.name);
  })
);
