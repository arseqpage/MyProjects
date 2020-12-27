import Inputmask from "inputmask";
import '../vendor/just-validate';
import '../components/modal';

let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

// let btnClose = document.querySelector('.modal-close');

// let selector2 = document.querySelector('input[type="tel"]');

// selector2.addEventListener('input', function () {
//   console.log(selector2.value)


//   const re = /^\d*(\.\d+)?$/;

//   console.log(selector2.value.match(/[0-9]/g).length)


//   console.log(selector2.value.replace(/[0-9]/g, "0"));

// });

// const fileInput = document.querySelector('input[type="file"]');

// fileInput.addEventListener('change', (e) => {
//   let files = e.currentTarget.files;
//   // console.log(files);

//   if (files.length) {
//     fileInput.closest('label').querySelector('span').textContent = files[0].name;
//   } else {
//     fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
//   }

// });

let firstForm = document.querySelector(`[data-target="first"]`);
let firstFormClose = firstForm.querySelector('.modal-close');
let thanksForm = document.querySelector(`[data-target="thanks"]`);
let thanksFormClose = thanksForm.querySelector('.modal-close');

let validateForms = function (selector, rules, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            firstFormClose.click();
            thanksForm.parentElement.classList.add('is-open');
            thanksForm.classList.add('modal-open');

            thanksFormClose.addEventListener('click', () => {

              thanksForm.parentElement.classList.remove('is-open');
              thanksForm.classList.remove('modal-open');

            });
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      form.reset();

      /*fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';*/
    }
  });
}

validateForms('.form', {
  email: {
    required: true,
    email: true
  },
  tel: {
    required: true
  }
}, '.thanks-popup', 'send goal');
