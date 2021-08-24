const API_Token = 'b90be1849d2f6aa2a14abc37ac91c25f';
const url = 'https://gnews.io/api/v4/top-headlines?token='

const getJson = async () => {
  const json = await fetch(`${url}${API_Token}`);
  return json.json();
}

const news =  getJson().then((promisse) => console.log(promisse));
