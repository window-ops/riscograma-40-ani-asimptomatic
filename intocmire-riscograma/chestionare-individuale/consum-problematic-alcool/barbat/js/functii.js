let punctaj = 0;
let intrebaricomplete = 0;
let nrintrebari = 3;
let sex = "Bărbat";
let rezultat = "";

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
    if (punctaj <= 7) {
      document.getElementById("punctajafis").innerHTML = punctaj.toString();
      rezultat = "Nu s-a detectat un consum inadecvat de alcool";
      document.getElementById("rezultatafis").innerHTML = rezultat;
    }
    else if (punctaj >= 8) {
      document.getElementById("punctajafis").innerHTML = punctaj.toString();
      rezultat = "S-a detectat un consum inadecvat de alcool";
      document.getElementById("rezultatafis").innerHTML = rezultat;
    }

  	//Ascunde afiseazapr și afișează pr
  	document.getElementById("afiseazapr").remove();
  	document.getElementById("pr").style.display = "block";
  }
}

function refachestionarul() {
  let confirmare = confirm("Sigur vreți să refaceți chestionarul? OK = DA; Cancel = NU");
  if (confirmare) {
    location.reload();
  }
}