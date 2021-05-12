const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

document.querySelector("#logout").addEventListener("click", logout);

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
