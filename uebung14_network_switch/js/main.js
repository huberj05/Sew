// Template Version: 2021_11_10
/*
Project: uebung14_network_switch
Author: Julian Huber
Date:    25.01.2022
*/

'use strict';

let allswitch = new Map();

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
  get currentPaper(){
    return this.#currentPaper;
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

class Switch{
  #MaxPorts;
  #SwitchName;
  #nmbrOfPrinters;
  #Printerinventory;
  constructor( SwitchhName, Maxports){
    this.#MaxPorts = Maxports;
    this.#SwitchName = SwitchhName;
    this.#Printerinventory = new Map();
    this.#nmbrOfPrinters = 0;
  }
  get getnbmrOfPrinters(){
    return this.#nmbrOfPrinters;
  }
  get getPrinterinventory(){
    return this.#Printerinventory;
  }
  get getSwitchName(){
    return this.#SwitchName;
  }
  get getMaxPorts(){
    return this.#MaxPorts;
  }
  addPrinters(printer) {
    if (this.#Printerinventory.size < this.#MaxPorts && typeof(printer) == 'object' && printer.constructor.name == 'Printer') {
      this.#Printerinventory.set(printer.MacAddress, printer);
      this.#nmbrOfPrinters++;
      return true;
    } else {
      return false;
    }
  }
  removePrinters(macAddress) {
    this.#nmbrOfPrinters--;
    return this.#Printerinventory.delete(macAddress);
  }
  getPrinter(macAddress) {
    let printer = this.#Printerinventory.get(macAddress);
    if (printer) {
      return printer;
    }
    return null;
  }
  findPrinter(Hostname) {
    for (let printer of this.#Printerinventory.values()) {
      if (printer.hostname === Hostname) {
        return printer;
      }
    }
    return null;
  }
  print(MacAddress, sheets){
    const printer = this.getPrinter(MacAddress); 
    if(printer == null || printer.currentPaper - sheets < 0){
      return false;
    } 
    printer.print(sheets);
    return true;
  }
  fillPrinters(){
    for (let printer of this.#Printerinventory.values()) {
      printer.currentPaper = printer.MaxPaper;
    }
  } 
}

//main program

allswitch.set('rws_SW101', new Switch('rws_SW101', 4));

/// get the rws_SW101 switch
let usingSwitch = allswitch.get('rws_SW101');

/// add 3 and later 4 printers to the switch
usingSwitch.addPrinters(new Printer('Printer1','FF:FF:FF:FF:FF:FF','192.168.19.20',80));
usingSwitch.addPrinters(new Printer('Printer2','AA:AA:AA:AA:AA:AA','192.168.19.100',10));
usingSwitch.addPrinters(new Printer('Printer3','00:00:00:00:00:00','192.168.19.5',22));
console.log(usingSwitch.getnbmrOfPrinters);
usingSwitch.addPrinters(new Printer('Printer4','99:99:99:99:99:99','192.168.19.77',111));
console.log(usingSwitch.getnbmrOfPrinters);

// add a 5th one to show it's not possible
usingSwitch.addPrinters(new Printer('Printer5','11:11:11:11:11:11','192.168.19.',80));
console.log(usingSwitch.getPrinterinventory.size); // 4 bc all ports are filled - the 5th one won't be added
console.log(usingSwitch.getnbmrOfPrinters); // 4 bc all ports are filled - the 5th one won't be added

// delete a printer 
usingSwitch.removePrinters('00:00:00:00:00:00');
console.log(usingSwitch.getnbmrOfPrinters);

// refill all printers
usingSwitch.fillPrinters();
let checkPrinter = usingSwitch.getPrinter('FF:FF:FF:FF:FF:FF');
console.log(checkPrinter.currentPaper);

// print 20 sheets on all printers 
for (let printer of usingSwitch.getPrinterinventory.values()) {
  printer.print(20);
}
console.log(checkPrinter.currentPaper);