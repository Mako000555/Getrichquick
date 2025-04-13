document.querySelector("#dollarsign").addEventListener("mouseover", dollarsignlight);
document.querySelector("#dollarsign").addEventListener("mouseout", dollarsignUNlight);
document.querySelector("#dollarsign").addEventListener("click", dollarsignInfo);

document.querySelector("#coffee").addEventListener("mouseover", coffeelight);
document.querySelector("#coffee").addEventListener("mouseout", coffeeUNlight);
document.querySelector("#coffee").addEventListener("click", coffeeInfo);

document.querySelector("#grafiti").addEventListener("mouseover", grafitilight);
document.querySelector("#grafiti").addEventListener("mouseout", grafitiUNlight);
document.querySelector("#grafiti").addEventListener("click", grafitiInfo);

function dollarsignlight() {
  console.log("dollarsignlight");
  document.querySelector("#dollarsign").style.fill = "#fff";
}

function dollarsignUNlight() {
  console.log("dollarsignUNlight");
  document.querySelector("#dollarsign").style.fill = "#f00";
}

function dollarsignInfo() {
  console.log("dollarsignInfo");

  animateboxes();

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadein");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#requirement").classList.add("fadein");
}

function coffeelight() {
  console.log("coffeelight");
  document.querySelector("#coffee").style.fill = "#fff";
}

function coffeeUNlight() {
  console.log("coffeeUNlight");
  document.querySelector("#coffee").style.fill = "#f00";
}

function coffeeInfo() {
  console.log("coffeeInfo");

  animateboxes();

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadein");
  document.querySelector("#requirement").classList.add("fadein");
}

function grafitilight() {
  console.log("grafitilight");
  document.querySelector("#grafiti").style.fill = "#fff";
}

function grafitiUNlight() {
  console.log("grafitiUNlight");
  document.querySelector("#grafiti").style.fill = "#f00";
}

function grafitiInfo() {
  console.log("grafitiInfo");

  animateboxes();

  document.querySelector("#efficiency").classList.remove("hide");
  document.querySelector("#requirement").classList.remove("hide");
  document.querySelector("#efficiency").classList.add("fadein");
  document.querySelector("#requirement").classList.add("fadein");
}

document.querySelector(".info-text > h2").textContent = "";
document.querySelector(".info-text > article > p").textContent = "";
document.querySelector("#efficiency").innerHTML = "";
document.querySelector("#requirement").innerHTML = "";
