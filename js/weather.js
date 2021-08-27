const acess_key = '79c66a9781a4797468098de154805d17';
const url = 'http://api.weatherstack.com/forecast';

const parameters = {
  acess_key,
  query: 'New York'
};

const getJson = async () => {
  const promisse = await fetch(url,{parameters} );
  console.log(promisse);
  return await promisse.json();
};

const main = async () => {
  const weatherObject = await getJson();
  console.log(weatherObject);
};

window.onload = async function() {
  main();
};
