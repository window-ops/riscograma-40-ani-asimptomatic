let punctaj = 0;
let intrebaricomplete = 0;
let nrintrebari = 2;
let nivelrisc = "";

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
    if (punctaj < 1) {
      document.getElementById("punctajafis").innerHTML = punctaj.toString();
      nivelrisc = "Risc minim";
      document.getElementById("riscafis").innerHTML = nivelrisc;
    }
    else if (punctaj == 1) {
      document.getElementById("punctajafis").innerHTML = punctaj.toString();
      nivelrisc = "Risc mediu";
      document.getElementById("riscafis").innerHTML = nivelrisc;
    }
    else if (punctaj >= 2) {
      document.getElementById("punctajafis").innerHTML = punctaj.toString();
      nivelrisc = "Risc sever";
      document.getElementById("riscafis").innerHTML = nivelrisc;
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