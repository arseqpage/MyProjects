import {
  Question
} from './question';
import {
  createModal,
  isValid
} from './utils';
import './style.css';



const form = document.getElementById('form'),
  input = form.querySelector('#question-input'),
  submitBtn = form.querySelector('#submit-btn'),
  modalBtn = document.querySelector('#modal-btn');

window.addEventListener('load', Question.renderList());

form.addEventListener('submit', submitFormHandler);
modalBtn.addEventListener('click', openModal);
input.addEventListener('input', () => {
  submitBtn.disabled = !isValid(input.value);
});

function submitFormHandler(event) {
  event.preventDefault();

  if (isValid(input.value)) {
    const question = {
      text: input.value.trim(),
      date: new Date().toJSON()
    };

    submitBtn.disabled = true;
    // Async request to server to save question
    Question.create(question).then(() => {
      input.value = '';
      input.className = '';
      submitBtn.disabled = false;
    })



  }

  console.log('Input');
}

console.log('App working');

function openModal() {
  createModal('Авторизация', '<h1>Test</h1>');
}