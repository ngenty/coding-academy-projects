//passwd validation
function nameValidation(name) {
  let re = /[a-zA-Z0-9]{2,}/; //1chr or longer
  return re.test(name); //true || false
}

//email validation
function emailValidation(email) {
  let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return re.test(email); //true || false
}

//textedit validation
function textValidation(text) {
  let re = /[a-zA-Z0-9]{2,}/; //2chr or longer
  return re.test(text); //true || false
}

// validate required fields
function validateName(name) {
  if (nameValidation(name) === true) {
    formName.style.color = '';
    formName_error.innerHTML = '';
    return true;
  } else {
    formName.style.color = 'red';
    formName_error.innerHTML = "The required field has not been filled in";
  }
  return false;
}

function validateEmail(email) {
  if (emailValidation(email) === true) {
    formEmail.style.color = '';
    formEmail_error.innerHTML = '';
    return true;
  } else {
    formEmail.style.color = 'red';
    formEmail_error.innerHTML = "The required field has not been filled in";
  }
  return false;
}

function validateObject(mailobject) {
  if (textValidation(mailobject) === true) {
    formObject.style.color = '';
    formObject_error.innerHTML = '';
    return true;
  } else {
    formObject.style.color = 'red';
    formObject_error.innerHTML = "The required field has not been filled in";
  }
  return false;
}

//ON LOAD ----------------------------------------------------------------------
let myScript = function() {
  //UI
  let formSend = document.getElementById('submit');
  let formName = document.getElementById('formName');
  let formName_error = document.getElementById('formName_error');
  let formEmail = document.getElementById('formEmail');
  let formEmail_error = document.getElementById('formEmail_error');
  let formObject = document.getElementById('formObject');
  let formObject_error = document.getElementById('formObject_error');
  let emailObfuscation = document.getElementsByTagName('address')[0].getElementsByTagName('a')[0];

  //email obfuscation
  emailObfuscation.innerHTML = emailObfuscation.innerHTML.replace('honeypot', 'johndoe');
  emailObfuscation.href = emailObfuscation.href.replace('honeypot', 'johndoe');

  formSend.addEventListener('click', function formvalidation(e) {
    e.preventDefault(); //PREVENT page reload
    //value
    name = formName.value;
    email = formEmail.value;
    object = formObject.value;
    console.log('[name] ' + name + '\n[email] ' + email + '\n[object] ' + object);

    if (validateName(name) === true && validateEmail(email) === true && validateObject(object) === true) {
      alert('NAME: ' + name + '\nEMAIL: ' + email + '\nOBJECT: ' + object);
      // alert('OK')
    }
  });

}

window.onload = myScript;
