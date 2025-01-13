const $contactForm = document.querySelector(".contact-form");
const $inputFirstName = document.querySelector("#name");
const $inputLastName = document.querySelector("#last-name");
const $inputEmail = document.querySelector("#email");
const $inputGeneralEnquiryRadio = document.querySelector(
  "#general-enquiry-radio"
);
const $inputSupportRequestRadio = document.querySelector(
  "#support-request-radio"
);
const $inputMessage = document.querySelector("#message-content");
const $inputConsentCheckbox = document.querySelector("#consent-checkbox");

const $firstNameErrorMessage = document.querySelector(
  ".input-name-error-message"
);
const $lastNameErrorMessage = document.querySelector(
  ".input-last-name-error-message"
);
const $emailErrorMessage = document.querySelector(".input-email-error-message");
const $radioErrorMessage = document.querySelector(".input-radio-error-message");
const $messageErrorMessage = document.querySelector(
  ".input-message-error-message"
);
const $consentErrorMessage = document.querySelector(
  ".input-consent-error-message"
);

$contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("Le formulaire vient d'être soumis")

  if ($inputFirstName.value.length <= 0) {
    $firstNameErrorMessage.classList.remove("hidden")
    $inputFirstName.classList.add("input-border-error")
  } else {
    $firstNameErrorMessage.classList.add("hidden")
    $inputFirstName.classList.remove("input-border-error")
  }

  if ($inputLastName.value.length <= 0) {
    $lastNameErrorMessage.classList.remove("hidden")
    $inputLastName.classList.add("input-border-error")
  } else {
    $lastNameErrorMessage.classList.add("hidden")
    $inputLastName.classList.remove("input-border-error")
  }

  if ($inputEmail.value.length <= 0) {
    $emailErrorMessage.classList.remove("hidden")
    $inputEmail.classList.add("input-border-error")
  } else {
    $emailErrorMessage.classList.add("hidden")
    $inputEmail.classList.remove("input-border-error")
  }

  if ($inputGeneralEnquiryRadio.checked === false && $inputSupportRequestRadio.checked === false) {
    // les deux son false
    $radioErrorMessage.classList.remove("hidden")
  } else {
    // Au moins l'un est vrai
    $radioErrorMessage.classList.add("hidden")
  }

  if ($inputMessage.value.length <= 0) {
    $messageErrorMessage.classList.remove("hidden")
    $inputMessage.classList.add("input-border-error")
  } else {
    $messageErrorMessage.classList.add("hidden")
    $inputMessage.classList.remove("input-border-error")
  }
});
