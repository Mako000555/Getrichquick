document.querySelector("#button1").addEventListener("click", openDialog);

function openDialog() {
  document.querySelector("#dialog1").showModal();
}

document.querySelector("#closeBtn1").addEventListener("click", closeDialog);
function closeDialog() {
  document.querySelector("#dialog1").closel();
}

document.querySelector("#button2").addEventListener("click", openDialog2);

function openDialog2() {
  document.querySelector("#dialog2").showModal();
}

document.querySelector("#closeBtn2").addEventListener("click", closeDialog2);

function closeDialog2() {
  document.querySelector("#dialog2").closel();
}

document.querySelector("#button3").addEventListener("click", openDialog3);

function openDialog3() {
  document.querySelector("#dialog3").showModal();
}

document.querySelector("#closeBtn3").addEventListener("click", closeDialog3);

function closeDialog3() {
  document.querySelector("#dialog3").closel();
}

function openDialog1() {
  const dialogContent = document.querySelector("#dialog1-content");

  dialogContent.innerHTML = `
      <h2>Badminton i Nørrebrohallen bliver dyrere: Inflation presser priserne op</h2>
      <p>Badmintonspillere i København må nu grave lidt dybere i lommen, hvis de vil svinge ketsjeren i Nørrebrohallen. Priserne på banebooking stiger som følge af den generelle inflation, der rammer både private og offentlige institutioner i hele landet.</p>
      <p>Københavns Kommune har bekræftet, at driftsomkostningerne for haller og idrætsanlæg er steget markant de seneste år – særligt på grund af højere udgifter til el, varme og vedligehold. Det betyder, at brugerne af Nørrebrohallen, herunder de mange badmintonentusiaster, nu skal betale mere for samme faciliteter.</p>
      <p>"Vi er nødt til at følge med udviklingen og sikre, at vi kan opretholde et højt serviceniveau og vedligeholde vores anlæg," udtaler en repræsentant fra Kultur- og Fritidsforvaltningen. "Selvom det aldrig er populært med prisstigninger, er det nødvendigt for at sikre hallernes drift på længere sigt."</p>
      <p>Den nye prisstruktur træder i kraft fra næste sæson og betyder typisk en stigning på 10-15% afhængigt af tidspunkt og type af booking. Det har skabt bekymring blandt nogle brugere, særligt dem med faste ugentlige tider.</p>
      <p>"Det er forståeligt med inflation, men for os, der spiller hver uge, bliver det hurtigt en mærkbar ekstraudgift," siger Kasper Jensen, en fast bruger af hallen. "Vi håber, kommunen vil overveje differentierede priser eller rabatordninger for faste brugere."</p>
      <p>Nørrebrohallen huser årligt tusindvis af idrætsudøvere og er en vigtig del af lokalområdets fritidsliv. Med de nye priser håber kommunen at kunne balancere økonomien uden at miste de mange brugere, der gør hallen til et aktivt samlingspunkt på Nørrebro.</p> 
`;
}
