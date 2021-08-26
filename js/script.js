import { apiToken } from '../key/apiKey.js';
import { addNews } from './addOneNews.js'
import { object } from '../js/object.js';

console.log(apiToken);
const url = ('https://gnews.io/api/v4/top-headlines?&country=br&token=');

const getJson = async (parameter = '') => {
  const promisse = await fetch(`${url}${parameter}${apiToken}`);
  return await promisse.json();
};

// ------ anderson ------
const printNews = (news) => {
  const newsMain = document.getElementById('news-main');

  news.forEach((New) => {
    const { title, description, image } = New;
    const linkNews = New.url;
    const column = addNews(title, description, image, linkNews);
    newsMain.appendChild(column);
  });
};

const main = async () => {
  const news = await getJson();
  printNews(news.articles);
// --------------------------

const acess = (event) => window.location.href = event.path[0].name;

const printNews = (news, section) => {
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

const printNewsByCategory = async (category, event) => {
  if(!category) {
    category = `&"${event.innerText}"`;
  } else category = `&"${category}"`;
  const news = await getJson(category);
  printNews(news.articles, document.querySelector('section'));
};

const saveNews = () => sessionStorage.setItem('news', document.querySelector('section').innerHTML);

const pickNewsFromStorage = () => {
  const news = sessionStorage.getItem('news');
  if(news) { document.querySelector('section') = news }
};


const main = async () => {
  // const news = await getJson();
  const news = object;
  printNews(news /*.articles*/, document.querySelector('section'));
};

window.onload = async function() {
  main();
};
