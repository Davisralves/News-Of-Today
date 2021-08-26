import { apiToken } from '../key/apiKey.js';
import { addNews } from './addOneNews.js'

console.log(apiToken);
const url = ('https://gnews.io/api/v4/top-headlines?&country=br&token=');

const getJson = async () => {
  const json = await fetch(`${url}${apiToken}`);
  return await json.json();
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

const main = async () => {
  const news = await getJson();
  printNews(news.articles);
};

window.onload = async function() {
  main();
};
