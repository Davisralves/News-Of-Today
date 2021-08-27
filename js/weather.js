const acessKey = '79c66a9781a4797468098de154805d17';
const url = 'http://api.weatherstack.com/forecast';

const parameters = {
  access_key: acessKey,
  query: 'New York'
};

const getJson = async () => {
  const json = JSON.stringify(parameters);
  console.log(json);
  const promisse = await fetch(url, json);
  // console.log(promisse);
  // return await promisse.json();
};

const main = async () => {
  const weatherObject = await getJson();
  console.log(weatherObject);
};

window.onload = async function() {
  main();
};
