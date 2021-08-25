import { apiToken } from '../key/apiKey.js';
import { object } from '../js/object.js';

console.log(apiToken);
const url = ('https://gnews.io/api/v4/top-headlines?&country=br&token=');

const getJson = async (parameter) => {
  if (!parameter) parameter = '';
  const json = await fetch(`${url}${parameter}${apiToken}`);
  return await json.json();
};

const acess = (event) => window.location.href = event.path[0].name;

const printNews = (news, section) => {
  console.log(news);
  news.forEach((New) => {
    const { title, description, image, url } = New;
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.innerText = title;
    const img = document.createElement('img');
    img.src = image;
    img.name = url;
    console.log(img.value);
    img.addEventListener('click', acess);
    const p = document.createElement('p');
    p.innerText = description;
    section.appendChild(div);
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(p);
  });
};

const main = async () => {
  // const news = await getJson();
  const news = object;
  printNews(news /*.articles*/, document.querySelector('section'));
};

window.onload = async function() {
  main();
};
