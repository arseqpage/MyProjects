import vars from "../_vars";

vars.$navToggle.addEventListener('click', (e) => {
  e.preventDefault();

  vars.$nav.classList.toggle('show');
});

vars.$navClose.addEventListener('click', (e) => {
  e.preventDefault();
  if (vars.$nav.classList.contains('show')) {
    vars.$nav.classList.remove('show');
  }
});
