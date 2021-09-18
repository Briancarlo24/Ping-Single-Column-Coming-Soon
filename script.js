const notifyButton = document.querySelector("button");
const inputField = document.querySelector(".email");
const errorMessage = document.querySelector(".popup-error");
init();

notifyButton.addEventListener("click", () => {
  console.log("Validating Email");
  validate();
});

function init() {
  inputField.classList.remove("borderChange");
  // errorMessage.classList.add("hidden");
}

function validate() {
  let email = document.getElementById("email").value;
  if (validateEmail(email) && email !== "") {
    alert("email " + email + " is valid");
    inputField.value = "";
    window.location.reload();

    return true;
  } else {
    inputField.classList.add("borderChange");
    errorMessage.classList.remove("hidden");
    inputField.setAttribute("placeholder", "example@email/com");
    return false;
  }
}

// To Check the validiy of the email Address
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
