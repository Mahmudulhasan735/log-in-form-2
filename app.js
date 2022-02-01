const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkImputs();
});

function checkImputs() {
  const userNameValue = username.value.trim()
  const emailValue = email.value.trim()
  const phonevalue = number.value.trim()
  const passwordValue = password.value.trim()
  const cpasswordvalue = cpassword.value.trim()


  if(userNameValue === ""){
    setErrorFor(username, "username cannot be blank")
  }else{
    setSuccessFor(username)
  }

}

function setErrorFor() {
  const formControl = input.parentElement;
  const small = input.querySelector('small');

  small.innerText = message;
  formControl.className = 'form-control error';
}