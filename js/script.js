import { apiToken } from '../key/apiKey.js';
console.log(apiToken);
const url = ('https://gnews.io/api/v4/top-headlines?&country=br&token=');

const getJson = async () => {
  const json = await fetch(`${url}${apiToken}`);
  return await json.json();
};

const printNews = (news, section) => {
  news.forEach((New) => {
    const { title, description, image } = New;
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.innerText = title;
    const img = document.createElement('img');
    img.src = image;
    const p = document.createElement('p');
    p.innerText = description;
    section.appendChild(div);
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(p);
  });
};

const main = async () => {
  const news = await getJson();
  printNews(news.articles, document.querySelector('section'));
};

window.onload = async function() {
  main();
};
