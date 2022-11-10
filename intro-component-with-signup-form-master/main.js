const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let prename = form["prename"].value;
  let dangerButton = document.querySelector(".danger-button1");
  let para1 = document.querySelector(".para1");

  if (prename === "") {
    prename = form["prename"];
    prename.style.border = "1px solid red";
    dangerButton.style.opacity = 1;
    para1.style.display = "block";
  } else {
    prename = form["prename"];
    prename.style.border = "1px solid green";
    dangerButton.style.opacity = 0;
    para1.style.display = "none";
  }

  let lastname = form["lastname"].value;
  let dangerButton2 = document.querySelector(".danger-button2");
  let para2 = document.querySelector(".para2");

  if (lastname === "") {
    lastname = form["lastname"];
    lastname.style.border = "1px solid red";
    dangerButton2.style.opacity = 1;
    para2.style.display = "block";
  } else {
    lastname = form["lastname"];
    lastname.style.border = "1px solid green";
    dangerButton2.style.opacity = 0;
    para2.style.display = "none";
  }

  let email = form["email"].value;
  let dangerButton3 = document.querySelector(".danger-button3");
  let para3 = document.querySelector(".para3");

  if (email === "") {
    email = form["email"];
    email.style.border = "1px solid red";
    dangerButton3.style.opacity = 1;
    para3.style.display = "block";
  } else if (!isValid(email)) {
    email = form["email"];
    email.style.border = "1px solid red";
    dangerButton3.style.opacity = 1;
    para3.style.display = "block";
  } else {
    email = form["email"];
    email.style.border = "1px solid green";
    dangerButton3.style.opacity = 0;
    para3.style.display = "none";
  }

  let password = form["password"].value;
  let dangerButton4 = document.querySelector(".danger-button4");
  let para4 = document.querySelector(".para4");

  if (password === "") {
    password = form["password"];
    password.style.border = "1px solid red";
    dangerButton4.style.opacity = 1;
    para4.style.display = "block";
  } else {
    password = form["password"];
    password.style.border = "1px solid green";
    dangerButton4.style.opacity = 0;
    para4.style.display = "none";
  }
  return false;
});

function isValid(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
