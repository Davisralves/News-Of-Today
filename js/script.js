import { apiToken } from '../key/apiKey.js';
import { addNews } from './addOneNews.js'
import { object } from '../js/object.js';

let url = ('https://gnews.io/api/v4/top-headlines?&');

const getJson = async (event) => {
  if (event !== 0 && typeof(event) !== 'string') {event = `${event.path[0].innerText}`};
  if (event === 'home') url = 'https://gnews.io/api/v4/top-headlines?&';
  if (event !== 0 && event !== 'home') url = `https://gnews.io/api/v4/search?q=`;
  if (event === 0) event = '';
  const promisse = await fetch(`${url}${event}&country=br&token=${apiToken}`);
  console.log(`${url}${event}&country=br&token=${apiToken}`);
  return await promisse.json();
};

const printNews = (news) => {
  const newsMain = document.getElementById('news-main');

  news.forEach((New) => {
    const { title, description, image } = New;
    const linkNews = New.url;
    const column = addNews(title, description, image, linkNews);
    newsMain.appendChild(column);
  });
};

const verifyPageItems = () => {
  const main =  document.querySelector('#news-main');
  const mainItems = document.querySelectorAll('.col');
  if(mainItems.length > 1) {
  mainItems.forEach((item) => main.removeChild(item));
  };
};

const main = async (event = 0) => {
  verifyPageItems();
  const news = await getJson(event);
  printNews(news.articles);
}

const acess = (event) => window.location.href = event.path[0].name;

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

const addEventToNav = () => {
  const nav = document.querySelectorAll('li');
  nav.forEach((item, index) => {
    if(index <= 4) {
      item.addEventListener('click', main);
    }
  })
};

const searchByInput = () => main(document.querySelector('input').value);

const addEventToButton = () => {
  const button = document.querySelector('button');
  button.addEventListener('click', searchByInput);
  button.addEventListener('keypress', (event) => {
    event.preventDefault();
    if(event.key === 'Enter') {
      button.click();
    }});
};

window.onload = async function() {
  main();
  addEventToNav();
  addEventToButton();
};
  