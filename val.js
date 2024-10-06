function validateForm() {
  const name = document.getElementById("name").value;
  // address
  const address = document.getElementById("address").value;
  // email
  const email = document.getElementById("email").value;
  // subject
  const subject = document.getElementById("subject").value;
  // paassword
  const password = document.getElementById("password").value;
  //agree
  const agree = document.getElementById("agree").checked;
  //error
  const nameError = document.getElementById("name-error");
  const addressError = document.getElementById("address-error");
  const emailError = document.getElementById("email-error");
  const subjectError = document.getElementById("subject-error");
  const passwordError = document.getElementById("password-error");
  const agreeError = document.getElementById("agree-error");

  // nameError.textContent= ""
  // addressError.textContent= ""
  // emailError.textContent= ""
  // subjectError.textContent= ""
  // passwordError.textContent= ""
  // agreeError.textContent= ""

  let isValid = true;
  //check name
  if (name === "" || /\d/.test(name)) {
    nameError.textContent = "Name is required and should not contain numbers";
    isValid = false;
  }
  //check address
  if (address === "") {
    addressError.textContent = "Address is required";
    isValid = false;
  }
  //check email
  if (email === "" || !email.includes("@")) {
    emailError.textContent = "Email is required and should contain @";
    isValid = false;
  }
  //check subject
  if (subject === "") {
    subjectError.textContent = "Subject is required";
    isValid = false;
  }
  //check password
  if (password === "" || password.length < 8) {
    passwordError.textContent =
      "Password is required with atleast 8 characters";
    isValid = false;
  }
  //check agree
  if (!agree) {
    agreeError.textContent = "You must agree to the terms and conditions";
    isValid = false;
  }

  return isValid;
}
