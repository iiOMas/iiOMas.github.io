const btns = document.querySelectorAll(".donate-btn");
const form = document.getElementById("form");
const overlay = document.getElementById('overlay');
const body = document.body;
const select = document.querySelector('select');
const amountContainer = document.getElementById('form-hidden');
const close = document.getElementById('close');

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

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log("Form Submitted");
  const fullName = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const amount = document.getElementById('amount').value;
  const method = document.querySelector('input[name="payment-method"]:checked').value;

  console.log("Name:", fullName);
  console.log("Email:", email);
  console.log("Amount:", amount);
  console.log("Method:", method);

  alert("Thank you !")

  form.style.display = 'none';
  overlay.style.display = 'none';
  body.classList.remove('no-scroll');
});



