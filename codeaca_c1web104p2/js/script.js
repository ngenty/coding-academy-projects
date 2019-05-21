console.log('SCRIPT LOADED');
// COOKIES----------------------------------------------------------------------
function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toUTCString();
  } else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}

// FORM VALIDATION--------------------------------------------------------------
function validateName(name) {
  let regex = /^[a-zA-Z ]{2,30}$/; //betw 2 & 30 only letters
  if (name === '') {
    console.log('[FORMNAME][NOK]' + name);
    form_name.style.border = '1px solid red';
    form_name_error.innerHTML = "Ce champs est requis";
    return false;
  }
  if (name.length <= 2) {
    console.log('[FORMNAME][NOK]' + name);
    form_name.style.border = '1px solid red';
    form_name_error.innerHTML = "Votre nom ne peut faire moins de 2 caractères";
    return false;
  }
  if (regex.test(name)) {
    console.log('[FORMNAME][OK]' + name);
    form_name.style.border = '';
    form_name_error.innerHTML = '';
    return true;
  } else {
    form_name.style.border = '1px solid red';
    form_name_error.innerHTML = "Seuls les caractères alphabétiques sont acceptés";
    return false;
  }
}

function validateEmail(email) {
  let regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (email === '') {
    console.log('[FORMEMAIL][NOK]' + email);
    form_email.style.border = '1px solid red';
    form_email_error.innerHTML = "Ce champs est requis";
    return false;
  }
  if (regex.test(email)) {
    console.log('[FORMEMAIL][OK]' + email);
    form_email.style.border = '';
    form_email_error.innerHTML = '';
    return true;
  } else {
    console.log('[FORMEMAIL][NOK]' + email);
    form_email.style.border = '1px solid red';
    form_email_error.innerHTML = 'Votre adresse email est invalide';
    return false;
  }
}

//ON LOAD ----------------------------------------------------------------------
let myScript = function() {
  // TESTS
  // eraseCookie('animation_newsletter')
  // UI
  let form = document.getElementById('newsletter_form');
  let form_name = document.getElementById('form_name');
  let form_name_error = document.getElementById('form_name_error');
  let form_email = document.getElementById('form_email');
  let form_email_error = document.getElementById('form_email_error');
  let form_submit = document.getElementById('form_submit');

  //check is user already subscribed to the newsletter
  if (readCookie('animation_newsletter')) {
    // console.log('[COOKIE][exist]');
    form.style.display = 'none';
    // return true;
  } else {
    // console.log('[COOKIE][no cookie]');
    form.style.display = 'flex';
    // return false;
  }

  form_name.addEventListener('focus', function formvalidation(e) {
    form_name.style.border = '';
    form_name_error.innerHTML = '';
  });
  form_email.addEventListener('focus', function formvalidation(e) {
    form_email.style.border = '';
    form_email_error.innerHTML = '';
  });

  form_submit.addEventListener('click', function formvalidation(e) {
    e.preventDefault(); //PREVENT page reload
    //value
    let name = form_name.value;
    let email = form_email.value;
    if (validateName(name) === true && validateEmail(email) === true) {
      form.innerHTML = "<p id=\"form_newsletter_thx\">Merci, votre inscription à notre Newsletter à bien été enregistrée.</p>"
      alert('FORM validated' + '\nNAME: ' + name + '\nEMAIL: ' + email);
      createCookie('animation_newsletter', 'true', 1);
      return true;
    } else {
      return false;
    }
  });

}
window.onload = myScript;
