var button  = document.getElementById('kirim');
// var whiteSpace = /^ *$/;
// var email =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function validation(id, msg) {
  var element = document.getElementById(id);
  element.innerText = element.getAttribute(msg);
  element.display = 'block';
  return false;
}

button.onclick = function(e) {
  var valUsername = document.getElementById('username').value;
  valPassword = document.getElementById('password').value;
  validUsername = true,
  validPassword = true;

  document.getElementById('msgUsername').style.display = 'none';
  document.getElementById('msgPassword').style.display = 'none';

  if (!validUsername || !validPassword) {
    e.preventDefault();
  }
}