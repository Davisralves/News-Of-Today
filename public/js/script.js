const { apiToken } = require('../../key/apiKey');

const url = 'https://gnews.io/api/v4/top-headlines?token='

const getJson = async () => {
  const json = await fetch(`${url}${apiToken}`);
  return json.json();
}

const news =  getJson().then((promisse) => console.log(promisse));
