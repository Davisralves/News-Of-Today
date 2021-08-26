export const addNews = (title, description, image, linkNews) => {

  const divCol = document.createElement('div');
  divCol.classList.add('col');

  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add('shadow-sm');

  const img = document.createElement('img');
  img.src = image;

  const h4 = document.createElement('h4');
  h4.innerText = title;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const p = document.createElement('p');
  p.classList.add('card-text');
  p.innerText = description.substr(0, 230) + '...';

  const openLink = document.createElement('a');
  openLink.href = linkNews;
  openLink.target = '_blank';

  cardBody.appendChild(h4);
  cardBody.appendChild(p);

  card.appendChild(img);
  card.appendChild(cardBody);

  openLink.appendChild(card);
  divCol.appendChild(openLink);

  return divCol;
}
