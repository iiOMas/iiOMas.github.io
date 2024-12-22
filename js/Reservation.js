document.getElementById("reservation-form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const guests = document.getElementById("guests").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value.trim();
  
  let formValid = true;
  
  function markFieldInvalid(fieldId) {
      const field = document.getElementById(fieldId);
      field.classList.add("invalid");
  }
  
  function markFieldValid(fieldId) {
      const field = document.getElementById(fieldId);
      field.classList.remove("invalid");
  }

  if (firstName === "") {
      markFieldInvalid("first-name");
      formValid = false;
  } else {
      markFieldValid("first-name");
  }

  if (lastName === "") {
      markFieldInvalid("last-name");
      formValid = false;
  } else {
      markFieldValid("last-name");
  }

  if (email === "" || !email.includes("@")) {
      markFieldInvalid("email");
      formValid = false;
  } else {
      markFieldValid("email");
  }

  if (phone === "" || phone.length < 10) {
      markFieldInvalid("phone");
      formValid = false;
  } else {
      markFieldValid("phone");
  }

  if (guests === "") {
      markFieldInvalid("guests");
      formValid = false;
  } else {
      markFieldValid("guests");
  }

  if (date === "") {
      markFieldInvalid("date");
      formValid = false;
  } else {
      markFieldValid("date");
  }

  if (formValid) {
      alert(
          `Reservation Successful!\n\n` +
          `Name: ${firstName} ${lastName}\n` +
          `Email: ${email}\n` +
          `Phone: ${phone}\n` +
          `Number of Guests: ${guests}\n` +
          `Reservation Date & Time: ${new Date(date).toLocaleString()}\n` +
          `Special Notes: ${notes || "No special notes"}`
      );

      const reservationDetails = {
          firstName,
          lastName,
          email,
          phone,
          guests,
          date: new Date(date).toLocaleString(),
          notes: notes || "No special notes"
      };

      const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
      reservations.push(reservationDetails);
      localStorage.setItem("reservations", JSON.stringify(reservations));

      document.getElementById("reservation-form").reset();
  } else {
      alert("Please fill in all the required fields correctly.");
  }
});
