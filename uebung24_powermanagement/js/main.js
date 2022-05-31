// Template Version: 2021_11_10
/*
Project: uebung24_powermanagement
Author:  Julian Huber
Date:    29.05.2022
*/

'use strict';
const APPNAME = 'uebung22_ski-professionals';
document.getElementById('myTitle').innerText = APPNAME;
document.getElementById('myHeading1').innerText = APPNAME;
let output1 = document.getElementById('outputResult');

let btnAllMachines = document.getElementById('btnAllMachines');
let btnAllMachineNames = document.getElementById('btnAllMachineNames');
let btnPowerGreater = document.getElementById('btnPowerGreater');
let btnNamesContaining = document.getElementById('btnNamesContaining');
let btnAveragePower = document.getElementById('btnAveragePower');
let btnSorted = document.getElementById('btnSorted');


let inputPowerGreater = document.getElementById('inputPowerGreater');
let inputNamesContaining = document.getElementById('inputNamesContaining');

let inputName = document.getElementById('inputName');
let inputTime = document.getElementById('inputTime');
let inputPower = document.getElementById('inputPower');
let inputRunName = document.getElementById('inputRunName');
let inputRunTime = document.getElementById('inputRunTime');
let inputDeleteName = document.getElementById('inputDeleteName');

let btnCreateMachine = document.getElementById('btnCreateMachine');
let btnRunMachine = document.getElementById('btnRunMachine');
let btnDeleteMachine = document.getElementById('btnDeleteMachine');

class Machine {
  #name;
  #performance;
  #operatingTime;
  #powerConsumption;
  constructor(name, performance, operatingTime) {
    this.name = name;
    this.performance = performance;
    this.operatingTime = operatingTime;
    this.#powerConsumption;
  }


  set name(name){
    this.#name = name;
  }

  set performance(performance){
    if(performance >= 0){
      this.#performance = performance;
    }
  }

  set operatingTime(operatingTime){
    if(operatingTime >= 0){
      this.#operatingTime = operatingTime;
    }
  }
  get name (){
    return this.#name;
  }

  get powerConsumption(){
    return this.performance*this.operatingTime/1000;
  }
  get operatingTime(){
    return this.#operatingTime;
  }
  get performance(){
    return this.#performance;
  }

  getMachineInfo(){
    return `Name: ${this.name}, Leistung: ${this.performance}, OperatingTime: ${this.operatingTime}`;
  }

  equals(othermachine){
    return othermachine.name == this.name;
  }

  run(hours){
    this.operatingTime += hours;
  }
  displayInfo(){
    return ``;
  }  
}

let machineArray = [];


btnCreateMachine.onclick = () => {
  let newName = inputName.value;
  let newPower = inputPower.value;
  let newHours = inputTime.value;
  if(machineArray.some( e => e.name == newName)){
    return false;
  }

  machineArray.push(new Machine(newName, newPower, newHours));
  return true;
};

btnDeleteMachine.onclick = () => {
  let deleteName = inputDeleteName.value;
  for(let i = 0; i<machineArray.length; i++){
    const element = machineArray[i];
    if(element.name == deleteName){
      machineArray.splice(i,1);
      return true;
    }
  }
  return false;
};

btnRunMachine.onclick = () => {
  let runName = inputRunName.value;
  for(let i = 0; i<machineArray.length; i++){
    const element = machineArray[i];
    if(element.name == runName){
      element.run(inputRunTime.value);
    }
  }
};
btnAllMachines.onclick = () => {
  let output = machineArray.map(e => e.getMachineInfo() + '<br>');
  if(output == ''){
    output1.innerHTML = 'Keine Maschinen gefunden';
  } else {
    output1.innerHTML = output;
  }
};
btnAllMachineNames.onclick = () => {
  let output = machineArray.map(e => e.name + ', ');
  if(output == ''){
    output1.innerHTML = 'Keine Maschinen gefunden';
  } else {
    output1.innerHTML = output;
  }
};
btnPowerGreater.onclick = () => {
  let threshold = inputPowerGreater.value;
  let output = [];
  for(let machine of machineArray){
    if(machine.performance >= threshold){
      output.push(machine);
    }
  }
  if(output == []){
    output1.innerHTML = 'Keine Maschinen gefunden';
  } else {
    output1.innerHTML = output.map(e => e.getMachineInfo() + '<br>');
  }
};
btnNamesContaining.onclick = () => {
  let pattern = inputNamesContaining.value;
  if(pattern.length < 3){
    output1.innerHTML = 'Muster zu kurz';
    return false;
  }
  let output = [];
  for(let machine of machineArray){
    if(machine.name.includes(pattern)){
      output.push(machine);
    }
  }
  if(output == []){
    output1.innerHTML = 'Keine Maschinen gefunden';
  } else {
    output1.innerHTML = output.map(e => e.getMachineInfo() + '<br>');
  }
};
btnAveragePower.onclick = () => {
  let output = machineArray.map(e => e.performance).reduce((sum,num)=> sum+Number(num));
  if(output == ''){
    output1.innerHTML = 'Keine Maschinen gefunden';
  } else {
    output1.innerHTML = output;
  }
};
btnSorted.onclick = () => {
  let output = machineArray.sort((a,b)=>a.name.localeCompare(b.name));
  if(output == ''){
    output1.innerHTML = 'Keine Maschinen gefunden';
  } else {
    output1.innerHTML = output.map(e => e.getMachineInfo() + '<br>');
  }
};
