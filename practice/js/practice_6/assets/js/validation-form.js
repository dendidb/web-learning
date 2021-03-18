var nama = document.getElementById("name");
var emailUser = document.getElementById("email");
var passwordUser = document.getElementById("password");
var handphone = document.getElementById("handphone");
var button = document.getElementById("kirim");
var msgNama = document.querySelector(".nama");
var msgEmail = document.querySelector(".email");
var msgPassword = document.querySelector(".password");
var msgHandphone = document.querySelector(".handphone");

var email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// button.onclick = function (e) {
//   e.preventDefault();
//   if (nama.value == "") {
//     msgNama.classList.add("active");

//   }
//   if (email.value == "") {
//     msgEmail.classList.add("active");
//   }
// };

// ================ ketika klik button ============== //

// button.onclick = function (e) {
//   e.preventDefault();
//   if (nama.value == "") {
//     msgNama.style.display = "block";
//   } else {
//     msgNama.style.display = "none";
//   }
//   if (email.value == "") {
//     msgEmail.classList.add("active");
//   }
// };


nama.onkeyup = function(e) {
  e.preventDefault();
  console.log(e.target.value);
  if (nama.value == "") {
    msgNama.style.display = "block";
  } else {
    msgNama.style.display = "none";
  }
};

emailUser.onkeydown = function(e) {
  console.log(this.value);
  if (emailUser.value == "" ||
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      emailUser.value)) {
    msgEmail.style.display = "block";
} else {
  msgEmail.style.display = "none";
}
};

passwordUser.onkeydown = function(e) {
  if (passwordUser.value.length < 6) {
    msgPassword.style.display = "block";
  } else {
    msgPassword.style.display = "none";
  }
};

handphone.onkeydown = function(e) {
  var numbers = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  if (handphone.value.match(numbers)) {
    msgHandphone.style.display = "none";
  } else {
    msgHandphone.style.display = "block";
    handphone.value = "";
  }
};


