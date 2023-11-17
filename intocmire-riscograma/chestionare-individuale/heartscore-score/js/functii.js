let punctaj = 0;
let intrebaricomplete = 0;
let nrintrebari = 5;

function raspunde(idintrebare, adaugarepunctaj) {
  // Adaugă punctajul și marcheaza o întrebare ca fiind completă
  punctaj = punctaj + adaugarepunctaj;
  intrebaricomplete++;

  // Dezactivează întrebarea
  const intrebare = document.getElementById(idintrebare);
  intrebare.classList.add("disabled-col");
}

function afiseazapr() {
  // Verifică daca s-a raspuns la toate întrebările
  if (intrebaricomplete < nrintrebari) {
    alert("Nu ați răspuns la toate întrebările!");
  }
  else if (intrebaricomplete == nrintrebari) {
  	// Evaluează
    document.getElementById("punctajafis").innerHTML = punctaj.toString();

  	//Ascunde afiseazap și afișează p
  	document.getElementById("afiseazap").remove();
  	document.getElementById("p").style.display = "block";
  }
}

function refachestionarul() {
  let confirmare = confirm("Sigur vreți să refaceți chestionarul? OK = DA; Cancel = NU");
  if (confirmare) {
    location.reload();
  }
}