import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/api/fetchCountries';
import { createMarkUp, list, div } from './js/createmarkup';
// import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchField = document.querySelector('#search-box');

searchField.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(event) {
  const value = event.target.value.trim();
  list.innerHTML = '';
  div.innerHTML = '';

  if (value === '') {
    return;
  }

  fetchCountries(value).then(response => {
    createMarkUp(response);
  });
}
