let pachetedetigari = 0;

let rezultatc1 = "";
let rezultatc2 = "";

let observatiiactivitatefizica = "";
let observatiidieta = "";
let observatiisanatateorala = "";

let masa = 0;
let inaltime = 0;
let imc = 0;

let tensiunearterialasistolica = 0;
let tensiunearterialadiastolica = 0;
let colesterolultotal = 0;

let antecedentepersonalesiheredocolateraledeneoplazie = "";
let expunerileparticulare = "";

let antecedentepersonalesiheredocolateraledeadictie = "";

let CUIfurnizor = "";
let codparafamedic = "";
let CNPpacient = "";
let varstapacient = "";

let datacurenta = new Date();
let luni = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
let ziua = datacurenta.getDate();
let luna = luni[datacurenta.getMonth()];
let anul = datacurenta.getFullYear();
let dataformatata = ziua + ' ' + luna + ' ' + anul;

function precompleteaza() {
  document.getElementById("dataintocmiriinput").value = dataformatata;
}

function calculeazaimc() {
  // Previne comportamentul implicit de trimitere
  event.preventDefault();

  // Verifică dacă inputurile sunt valide
  var masa = document.getElementById("masaimc").value;
  var inaltime = document.getElementById("inaltimeimc").value;

  // Încearcă calcularea IMC
  inaltimeinmetri = inaltime / 100;
  imc = (masa / (inaltimeinmetri * inaltimeinmetri)).toFixed(2);
  if (![imc].every(Boolean) || isNaN(imc) || imc <= 0) {
    alert("Vă rugăm să verificați dacă ați introdus valori valide pentru masă și înălțime!");
    return;
  }
  document.getElementById("imcafis").value = imc;
}

function intocmesteriscograma() {
  // Previne comportamentul implicit de trimitere
  event.preventDefault();
  
  // Atribuie valori introduse de utilizator
  pachetedetigari = parseInt(document.getElementById("pachetedetigariinput").value);
  rezultatc1 = document.getElementById("rezultatc1input").value;
  observatiiactivitatefizica = document.getElementById("observatiiactivitatefizicainput").value;
  observatiidieta = document.getElementById("observatiidietainput").value;
  observatiisanatateorala = document.getElementById("observatiisanatateoralainput").value;
  rezultatc2 = document.getElementById("rezultatc2input").value;
  tensiunearterialasistolica = document.getElementById("tensiunearterialasistolicainput").value;
  tensiunearterialadiastolica = document.getElementById("tensiunearterialadiastolicainput").value;
  colesterolultotal = document.getElementById("colesterolultotalinput").value;
  antecedentepersonalesiheredocolateraledeneoplazie = document.getElementById("antecedentepersonalesiheredocolateraledeneoplazieinput").value;
  antecedentepersonalesiheredocolateraledeadictie = document.getElementById("antecedentepersonalesiheredocolateraledeadictieinput").value;
  expunerileparticulare = document.getElementById("expunerileparticulareinput").value;
  CUIfurnizor = document.getElementById("CUIinput").value;
  codparafamedic = document.getElementById("codparafainput").value;
  CNPpacient = document.getElementById("CNPpacientinput").value;
  varstapacient = document.getElementById("varstapacientinput").value;

  // Verifică dacă toate câmpurile sunt completate și completate corect
  if (![pachetedetigari, imc, tensiunearterialasistolica, tensiunearterialadiastolica, colesterolultotal].every(Boolean) || isNaN(pachetedetigari) || pachetedetigari < 0 || isNaN(imc) || imc <= 0 || isNaN(tensiunearterialasistolica) || tensiunearterialasistolica <= 0 || isNaN(tensiunearterialadiastolica) || tensiunearterialadiastolica <= 0 || isNaN(colesterolultotal) || colesterolultotal <= 0  || rezultatc1 === "" || observatiiactivitatefizica === "" || observatiidieta === "" || observatiisanatateorala === "" || rezultatc2 === "" || antecedentepersonalesiheredocolateraledeneoplazie === "" || expunerileparticulare === "" || antecedentepersonalesiheredocolateraledeadictie === "") {
    alert("Nu ați completat corespunzător toate câmpurile obligatorii marcate cu *!");
    return;
  }
  if (CUIfurnizor.length !== 12) {
    alert("CUI-ul furnizorului trebuie să aibă 12 caractere!");
    return;
  }
  else if (codparafamedic.length !== 6) {
    alert("Codul parafă medic trebuie să aibă 6 cifre!");
    return;
  }
  else if (CNPpacient.length !== 13) {
    alert("CNP-ul pacientului trebuie să aibă 13 cifre!");
    return;
  }
  else if (varstapacient === "") {
    alert("Nu ați selectat vârsta pacientului!");
    return;
  }

  // Crează conținut de fișier text
  var fileContent = "-- 1. Comportamente cu impact global asupra sănătăţii --" + "\n\n" +
                    "- Câte pachete de țigări fumează pacientul pe an: " + pachetedetigari + "\n" +
                    "- S-a detectat un consum inadecvat de alcool: " + rezultatc1 + "\n" +
                    "- Observații privind activitatea fizică a pacientului: " + observatiiactivitatefizica + "\n" +
                    "- Observații privind dieta pacientului: " + observatiidieta + "\n" +
                    "- Observații privind sănătatea orală a pacientului: " + observatiisanatateorala + "\n" +
                    "- IMC pacient: " + imc + "\n" +
                    "\n" + "-- 2. Riscul Cardiovascular --" + "\n\n" +
                    "- Punctajul HeartScore SCORE: " + rezultatc2 + "\n" +
                    "- Tensiunea arterială sistolică a pacientului: " + tensiunearterialasistolica + " mmHg" + "\n" +
                    "- Tensiunea arterială diastolică a pacientului: " + tensiunearterialadiastolica + " mmHg" + "\n" +
                    "- Colesterolul total al pacientului: " + colesterolultotal + " mmol/L" + "\n" +
                    "\n" + "-- 3. Riscul Oncologic --" + "\n\n" +
                    "- Antecedentele personale şi heredo-colaterale de neoplazie la rudele de gradul I prin filiaţie directă ale pacientului: " + antecedentepersonalesiheredocolateraledeneoplazie + "\n" +
                    "- Expunerile particulare (azbest, aniline etc.) ale pacientului: " + expunerileparticulare + "\n" +
                    "\n" + "-- 4. Riscuri privind Sănătatea Mintală --" + "\n\n" +
                    "- Antecedentele personale şi heredo-colaterale de adicţie la rudele de gradul I prin filiaţie directă ale pacientului: " + antecedentepersonalesiheredocolateraledeadictie + "\n" +
                    "\n" + "-- Date de identificare --" + "\n\n" +
                    "Cod parafă medic: " + codparafamedic + "\n" +
                    "CNP pacient: " + CNPpacient + "\n" +
                    "Vârstă pacient: " + varstapacient + "\n" +
                    "Data completării chestionarului: " + dataformatata + "\n";

  // Crează un nou obiect Blob cu conținutul fișierului
  var file = new Blob([fileContent], {type: 'text/plain'});

  // Crează un nou obiect URL cu obiectul Blob
  var fileURL = URL.createObjectURL(file);

  // Crează un nou element de ancorare cu adresa URL a fișierului
  var downloadLink = document.createElement("a");
  downloadLink.href = fileURL;
  downloadLink.download = "riscograma_riscograma-40-ani-asimptomatic_CNP-" + CNPpacient + ".txt";

  // Adaugă elementul de ancorare la corpul documentului
  document.body.appendChild(downloadLink);

  // Apasă pe elementul de ancorare pentru a declanșa descărcarea
  downloadLink.click();

  // Scoate elementul de ancorare din corpul documentului
  document.body.removeChild(downloadLink);
}