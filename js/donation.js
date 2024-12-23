const btns = document.querySelectorAll(".donate-btn");
const form = document.getElementById("form");
const overlay = document.getElementById('overlay');
const body = document.body;
const select = document.querySelector('select');
const amountContainer = document.getElementById('form-hidden');
const close = document.getElementById('close')

btns.forEach (btn => {
  btn.addEventListener('click', (event) => {
    event.preventDefault();
    form.style.display = 'flex';
    overlay.style.display = 'block';
    body.classList.add('no-scroll');
  });
});

close.addEventListener('click', (event)=> {
  form.style.display = 'none';
  overlay.style.display = 'none';
  body.classList.remove('no-scroll');
});

select.addEventListener('change', (event) => {
  if (event.target.value === 'more') {
    amountContainer.hidden = false;
  } else {
    amountContainer.hidden = true;
  }
});

