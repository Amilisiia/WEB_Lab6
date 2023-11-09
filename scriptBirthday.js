document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#birthdate-form");
  const result = document.querySelector("#result");
  const birthdateInput = document.querySelector("#birthdate");
  const todayDateButton = document.querySelector("#today-date");
  const clearDateButton = document.querySelector("#clear-date");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const birthdate = new Date(birthdateInput.value);

    if (isNaN(birthdate)) {
      result.innerHTML = "Invalid date. Please select a valid birthdate.";
    } else {
      const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const dayOfWeek = daysOfWeek[birthdate.getUTCDay()];
      result.innerHTML = `Your house was built on ${dayOfWeek}.`;
    }
  });

  todayDateButton.addEventListener("click", function () {
    const today = new Date();
    birthdateInput.valueAsDate = today;
  });

  clearDateButton.addEventListener("click", function () {
    birthdateInput.value = "";
    result.innerHTML = "";
  });
});


