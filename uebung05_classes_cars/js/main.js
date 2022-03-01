/*
Project: uebung05_classes_cars
Author:  Julian Huber
Date:    09.11.2021
*/

'use strict';
const appName = 'Classes - Cars';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading1').innerText = appName;


const inputBrand = document.getElementById('brand');
const inputModel = document.getElementById('model');
const inputPS = document.getElementById('ps');
const inputNrOfWheels = document.getElementById('nrOfWheels');
const inputVMax = document.getElementById('vMax');
const inputFuelType = document.getElementById('fuelType');
const inputMaxFuel = document.getElementById('maxFuel');
const inputDistance = document.getElementById('distance');
const inputFuelconsumption = document.getElementById('fuelconsumption');
const inputTransmissiontype = document.getElementById('transmissiontype');
const buttonAddCar = document.getElementById('addCar');
const buttonSearchCar = document.getElementById('searchCarModel');

const output2 = document.getElementById('output2');


class Car {   
     
    constructor(brand, model, ps, nrOfWheels, vMax, fuelType, maxFuel,distance,fuelconsumption, transmissiontype) {
        this.brand = brand;
        this.model = model;
        this.ps = ps;
        this.nrOfWheels = nrOfWheels;
        this.vMax = vMax;
        this.fuelType = fuelType;
        this.maxFuel = maxFuel;
        this.actualFuel = maxFuel;
        this.distance = distance;
        this.color = '';
        this.fuelconsumption = fuelconsumption;
        this.transmissiontype = transmissiontype;

    }

    drive(km) {
        this.actualFuel -= (km * this.fuelconsumption / 100);       //pro hundert km werden die Liter abgezogen
        this.distance += km; 
    }

    isTankFull() {

        return this.actualFuel == this.maxFuel;

        // if(this.actualFuel == this.maxFuel) {
        //     return true;
        // }
        // return false;
    }

    getActualTank() {
        return this.actualFuel;
    }

    refuel(neededFuel) {
        if(neededFuel > 0 && neededFuel+this.actualFuel <= this.maxFuel) {
            this.actualFuel = neededFuel + this.actualFuel;
        }
    }
    
    getCarInfo() {
       return 'Marke: ' + this.brand + '; Leistung: ' + this.ps + ': Number von den Reifen: ' + this.nrOfWheels + '; Maximale Geschwindigkeit: ' + this.vMax + '; Sprittyp: ' + this.fueltype + '; Maximale Tankkapazität: ' + this.maxFuel + '; Kilometerstand: ' + this.distance + '; Spritverbrauch: ' + this.fuelconsumption + 'Getriebetyp: ' +this.transmissiontype + '<br>'; 
    } // hier werden alle Informationen von den Autos aufgezählt
    
    isTankempty() {
        if (this.actualFuel = 0){
            return 'Tank ist leer'; // wenn actualFuel 0 ist, ist der Tank leer
        } else {
            return 'Tank ist nicht leer';
        }
    } 
    distancetype(){
        if (this.distance <= 15000){
            return 'fast neu';
        } else if (this.distance <= 35000){
            return 'wenig gefahren';
        } else if (this.distance <= 70000){
            return 'durchschnittlich lange gefahren';//gibt an, wie "abgenutzt/alt" das Auto ist
        } else if (this.distance <= 100000){
            return 'lange gefahren';
        } else if (this.distance > 100000){
            return 'sehr lange gefahren';
        }
    }

    }
   


 //Hauptprogramm
 const myfirstCar = new Car('Audi', 'A3', 120, 4, 200, 'Diesel', 85, 25000,4,'Manuell');
 myfirstCar.color = 'black';

 const mysecondCar = new Car('Audi', 'A4', 150, 4, 219, 'Benzin', 54, 8000,7, 'Manuell');//die Autos, die man suchen kann
mysecondCar.color = 'white';

let carInventory = [myfirstCar,mysecondCar];

 buttonAddCar.onclick = function() {
    
    let carToAdd = new Car( inputBrand.value, 
                            inputModel.value,
                            Number(inputPS.value),
                            Number(inputNrOfWheels.value), //fügt ein neues Auto in "carInventory" hinzu
                            Number(inputVMax.value), 
                            inputFuelType.value, 
                            Number(inputMaxFuel.value), 
                            Number(inputDistance.value)
                           );

    carInventory.push(carToAdd);

 }



buttonSearchCar.onclick = function(){
    let searchedcars = '';
    for (let index = 0; index < carInventory.length; index++) {
        if(carInventory[index].brand == inputBrand.value){// sucht die Marke heraus und speichert diese in "searchedcars" rein und gibt sie mit "getCarInfo"aus
            searchedcars+=carInventory[index].getCarInfo();
        }
    }
    output2.innerHTML = searchedcars;
}

 