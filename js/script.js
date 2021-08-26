import { apiToken } from '../key/apiKey.js';
import { addNews } from './addOneNews.js'
import { object } from '../js/object.js';

let url = ('https://gnews.io/api/v4/top-headlines?&');

const getJson = async (event) => {
  if(event !== '') {event = `${event.path[0].innerText}`};
  if (event === 'home') url = 'https://gnews.io/api/v4/top-headlines?&';
  if (event !== '' && event !== 'home') url = `https://gnews.io/api/v4/search?q=`;
  const promisse = await fetch(`${url}${event}&country=br&token=${apiToken}`);
  console.log(`${url}${event}&token=${apiToken}`);
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

const main = async (event = '') => {
  const main = document.querySelector('main');
  main.removeChild(main.firstChild);
  const news = await getJson(event);
  console.log(news);
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


// const main = async () => {
//   // const news = await getJson();
//   const news = object;
//   printNews(news /*.articles*/, document.querySelector('section'));
// };
const funciono = (event) => console.log(event.path[0].innerText);

const addEventToNav = () => {
  const nav = document.querySelectorAll('li');
  console.log(nav);
  nav.forEach((item, index) => {
    if(index <= 4) {
      item.addEventListener('click', main);
    }
  })
};



window.onload = async function() {
  main();
  addEventToNav();
};
  