import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  submit: document.querySelector('[type="submit"]'),
};

let formData = {};

onPageReload();

refs.form.addEventListener('input', throttle(onInput, 1000));
refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onPageReload() {
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    refs.form.querySelector('input').value = formData.email;
    refs.form.querySelector('textarea').value = formData.message;
  }
}

console.log(formData);
