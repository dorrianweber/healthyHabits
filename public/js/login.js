const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    if (password.length >= 8) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        const mailer = await fetch("/api/mailerRoutes", {
          method: "GET",
        });
        document.location.replace("/profile");
      } else {
        alert(response.statusText);
      }
    } else {
      alert("Password must be at least 8 characters");
    }
  } else {
    alert("Please fill out name, email, & password fields");
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

function setNewImage1() {
  document.getElementById("image1").src =
    "https://github.com/dorrianweber/project2/blob/main/public/images/physical-health.jpg?raw=true";
}

function setOldImage1() {
  document.getElementById("image1").src =
    "https://github.com/dorrianweber/project2/blob/main/public/images/meals.jpg?raw=true";
}

function setNewImage2() {
  document.getElementById("image2").src =
    "https://i.pinimg.com/564x/f2/64/5e/f2645eab0f72a49b1a40eb595bcffb6e.jpg";
}

function setOldImage2() {
  document.getElementById("image2").src =
    "https://github.com/dorrianweber/project2/blob/main/public/images/sleep.jpg?raw=true";
}

function setNewImage3() {
  document.getElementById("image3").src =
    "https://www.rudymawer.com/blog/wp-content/uploads/2018/01/80004087_l-1320x881.jpg";
}

function setOldImage3() {
  document.getElementById("image3").src =
    "https://github.com/dorrianweber/project2/blob/main/public/images/caloriesGraph.jpg?raw=true";
}
