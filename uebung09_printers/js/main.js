// Template Version: 2021_11_10
/*
Project: uebung09_printers
Author:  Fabian Jungwirt
Date:    13.12.2021
*/

'use strict';
const APPNAME = 'uebung09_printers';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading1').innerText = APPNAME;

const output = document.getElementById('output');
const output2 = document.getElementById('output2');

const inputHostName = document.getElementById('inputHostName');
const inputMacAddress = document.getElementById('inputMacAddress');
const inputIpAddress = document.getElementById('inputIpAddress');
const inputMaxPaper = document.getElementById('inputMaxPaper');
const inputSearchMac = document.getElementById('inputSearchMac');

const btnAdd = document.getElementById('btnAdd');
const btnSearchMac = document.getElementById('btnSearchMac');
const btnClear = document.getElementById('btnClear');
const btnList = document.getElementById('btnList');

class Printer{
  #hostname;
  #macAddress;
  #ipAddress;
  #maxPaper;
  #currentPaper;

  constructor(hostname, macAddress, ipAddress, maxPaper){
    this.#hostname = hostname;
    this.#macAddress = macAddress;
    this.#ipAddress = ipAddress;
    this.#maxPaper = maxPaper;
    this.#currentPaper = 0;
  }

  get MaxPaper(){
    return this.#maxPaper;
  }
  get MacAddress(){
    return this.#macAddress;
  }
  get IpAddress(){
    return this.#ipAddress;
  }
  get hostname(){
    return this.#hostname;
  }
  set hostname (value) {
    this.#hostname = value;
  }

  set currentPaper (value) {
    if( this.#currentPaper + value > this.#maxPaper){
      this.#currentPaper = this.#maxPaper;
      console.log('The Printer has been overloaded');
    } else if( this.#currentPaper + value < 0 ){
      this.#currentPaper = 0;
    } else {
      this.#currentPaper += value;
    }
  }
  print(numberOfSheets) {
    if(this.#currentPaper-numberOfSheets < 0 ){
      this.#currentPaper = 0;
      return 'Out of Paper, could not finish printing!';
    } else {
      this.#currentPaper -= numberOfSheets;
    }
  }
  addPaper(numberOfSheets) {
    if(numberOfSheets < 0) {
      return 'ERROR';
    }
    this.#currentPaper += numberOfSheets;
  }

  show(){
    return `Hostname: ${this.#hostname}, MAC-Adresse: ${this.#macAddress}, IP-Adresse: ${this.#ipAddress}, Maximales Papier: ${this.#maxPaper}, Füllstand: ${this.#currentPaper}Papier`;
  }
}

function checkIfNumber(input) {
  return !isNaN(input);
}

function checkIfEmpty(input) {
  return (input !== '' && input !== undefined);
}

let printerInventory = [];

btnList.onclick = function () {
  output.innerHTML = '';
  for (let index = 0; index < printerInventory.length; index++) {
    const element = printerInventory[index];
    output.innerHTML += element.show() + '<br>';
  }
};

btnClear.onclick = function () {
  printerInventory = [];
  output.innerHTML = '';
  output2.innerHTML = '';
};

btnAdd.onclick = function () {
  if(checkIfEmpty(inputIpAddress.value) && checkIfEmpty(inputMacAddress.value) && checkIfNumber(inputMaxPaper.value)&& checkIfEmpty(inputHostName.value)){

    printerInventory.push(
      new Printer (
        inputHostName.value,
        inputMacAddress.value,
        inputIpAddress.value,
        inputMaxPaper.value
      )
    );

  } else {
    alert('Ein Fehler ist aufgetreten!');
  }
};

btnSearchMac.onclick = function () {
  output.innerHTML = '';
  let searchedMac = inputSearchMac.value;
  for (let index = 0; index < printerInventory.length; index++) {
    const element = printerInventory[index];
    if(element.MacAddress == searchedMac) {
      output.innerHTML= element.show();
    }
  }
};


let printer = new Printer('R-EDV4', '00-FF-6F-30-87-73', '172.18.103.240', 20); 
printer.currentPaper = 30; // #currentPaper sollte 20 sein 
printer.currentPaper = -10; // #currentPaper sollte 0 sein 
printer.currentPaper = 20; // #currentPaper sollte 20 sein 
printer.print(10); // #currentPaper sollte 10 sein 
printer.print(15); // #currentPaper sollte 0 sein