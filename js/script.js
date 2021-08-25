import { apiToken } from '../key/apiKey.js';
console.log(apiToken);
const url = ('https://gnews.io/api/v4/top-headlines?&country=br&token=');

const getJson = async () => {
  const json = await fetch(`${url}${apiToken}`);
  return json.json();
};

const main = async () => {
  const news = await getJson();
  console.log(news);
};

window.onload = async function() {
  main();
};
