import { apiToken } from '../key/apiKey.js';
console.log(apiToken);
const url = ('https://gnews.io/api/v4/top-headlines?&country=br&token=');

const getJson = async () => {
  const json = await fetch(`${url}${apiToken}`);
  return json.json();
};

// console.log(`${url}${apiToken}`);

const news =  getJson().then((promisse) => console.log(promisse));
