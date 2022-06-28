import Notiflix from 'notiflix';

const list = document.querySelector('.country-list');
const div = document.querySelector('.country-info');

function createMarkUp(arr) {
  list.innerHTML = '';
  div.innerHTML = '';

  if (arr.length > 10) {
    Notiflix.Notify.info('Too short');
    return;
  } else if (arr.length >= 2) {
    listOfCountries(arr);
  } else {
    showCountry(arr);
  }
}

function listOfCountries(arr) {
  const countryList = arr
    .map(element => {
      return `<li class ="li-list"><img class ="list-flag" src="${element.flags.svg}" alt="${element.name}"/> <h2>${element.name}</h2></li>`;
    })
    .join('');

  list.innerHTML = countryList;
}

function showCountry(arr) {
  const markUp = `<h2 class ="h2-div">${arr[0].name}</h2><img src ="${
    arr[0].flags.svg
  }" alt="${arr[0].name}" width ="200"/><p>Capital: <span>${
    arr[0].capital
  }</span></p><p>Population: <span>${arr[0].population}</span></p>
  <p>Languages: <span>${arr[0].languages
    .map(elem => elem.name)
    .join(' ,')}</span></p>`;

  div.innerHTML = markUp;
}

export { createMarkUp, list, div };
