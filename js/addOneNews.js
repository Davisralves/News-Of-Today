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
  p.innerText = description.substr(0, 180);

  const buttonView = document.createElement('a');
  buttonView.href = linkNews;
  buttonView.target = '_blank';
  buttonView.classList.add('btn');
  buttonView.classList.add('btn-sm');
  buttonView.classList.add('btn-outline-secondary');
  buttonView.innerText = 'Ver';

  cardBody.appendChild(p);
  cardBody.appendChild(buttonView);

  card.appendChild(img);
  card.appendChild(h4);
  card.appendChild(cardBody);

  divCol.appendChild(card);

  return divCol;
}
