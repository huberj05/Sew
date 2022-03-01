// Template Version: 2021_11_10
/*
Project: uebung12_self_made_class_diagramm
Author: Julian Huber
Date:    11.01.2022
*/

'use strict';
const appName = 'Buchverkauf';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading1').innerText = appName;

const inputTitle = document.getElementById('title');
const inputQuality = document.getElementById('quality');
const inputSideNumber = document.getElementById('sidenumber');
const inputDate = document.getElementById('date');
const inputAutor = document.getElementById('autor');
const inputBookType = document.getElementById('booktype');
const output2 = document.getElementById('output2');

const btnClear = document.getElementById('clear');
const btnAdd = document.getElementById('add');
const btnshow = document.getElementById('show');
const btnsell = document.getElementById('sell');

class bibliothek {
  #title;
  #autor;
  #date;

  constructor(title, quality, sidenumber, date, autor, booktype) {
    this.quality = quality;
    this.#title = title;
    this.sidenumber = sidenumber;
    this.#date = date;
    this.#autor = autor;
    this.booktype = booktype;
  }
  get getTitle (){
    return this.#title;
  }
  get getAutor(){
    return this.#autor;
  }
  get getDate(){
    return this.#date;
  }
  getInfo(){
    return 'Autor : ' + this.#autor + '; Titel : ' + this.#title + ';  Seitennummer : ' + this.sidenumber + '; Erscheinungsdatum : ' + this.#date + '; Buchtyp : ' + this.booktype + '; Qualität ' + this.quality + ';';
  }
  qualityBook(){
    if (this.quality == 100){
      return 'Neu';
    } else if (this.quality < 100){
      return 'fast neu';
    } else if (this.distance < 75){
      return 'leichte gebrauchsspuren';//gibt an, wie "abgenutzt/alt" das Buch ist
    } else if (this.distance < 50){
      return 'mittlere gebrauchsspuren';
    } else if (this.distance < 25){
      return 'nicht mehr für den Verkauf geeignet!';
    }
  }
}

let BookInventory = new Map ();

function isCorrect(input) {
  if (input != '') {
    return input;
  } 
}

btnshow.onclick = function () {
  output2.innerHTML='';
  for (let Book of BookInventory.values()) {
    output2.innerHTML += Book.getInfo();
  }
};

btnAdd.onclick = function () {
  if (isCorrect(inputTitle.value) && isCorrect(inputAutor.value) && isCorrect(inputBookType.value) && isCorrect(inputQuality.value && isCorrect(inputDate) && isCorrect(inputSideNumber))) {
    let newBook = new bibliothek(
      inputAutor.value,
      inputTitle.value,
      inputDate.value,
      inputQuality.value,
      inputSideNumber.value,
      inputBookType.value,
    );
    BookInventory.set(inputAutor, newBook);
  }
};

btnClear.onclick = function () {
  BookInventory.clear();
  inputAutor.value = '';
  inputTitle.value = '';
  inputDate.value = '';
  inputQuality.value = '';
  inputSideNumber.value = '';
  inputBookType.value = '';
};

btnsell.onclick = function () {
  if(inputQuality.value <= 25){
    alert ('Dieses Buch kann nicht mehr verkauft werden!');
  } else if (inputQuality.value<  50){
    alert ('Sie können das Buch für 3.99 € verkaufen!');
  } else if (inputQuality.value < 75){
    alert (' Sie können das Buch für 9.99 € verkaufen !');
  } else if (inputQuality.value <= 100){
    alert(' Sie können das Buch für 15.99 € verkaufen!');
  }
};