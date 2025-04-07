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
    document.querySelector("#dollarsign").style.color = "green";
    console.log("dollarsignlight");
    this.style.fill = #fff";
}

function dollarsignUNlight() {
    document.querySelector("#dollarsign").style.color = "green;
    console.log("dollarsignUNlight");
    this.style.fill = "#000";
}