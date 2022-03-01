/*
Project: uebung07_phonebook
Author:  Julian Huber
Date:    23.11.2021
*/

'use strict';
const appName = 'Classes - Phone-Call';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading1').innerText = appName;


const inputfirstname = document.getElementById('firstname');
const inputlastname = document.getElementById('lastname');
const inputphonenumber = document.getElementById('phonenumber');
const inputminutes = document.getElementById('minutesgui');

const buttonadd = document.getElementById('add');
const buttoncall = document.getElementById('call');
const buttonshow = document.getElementById('show');

const output2 = document.getElementById('output2');

class Contacts {

    constructor(firstname,lastname, phonenumber, calledminutes, id, NumberofCalls){
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.calledminutes = 0;
        this.id = id;
        this.NumberofCalls = NumberofCalls;
    }
    Call(minutes){
        if (this.calledminutes > 0){
            this.calledminutes += minutes;//wenn calledminutes größer als 0 ist, dann werden zu calledminutes die minutes hinzugezählt
            this.NumberofCalls += 1;
        }
    }
    ResetCalls(){
        this.calledminutes = 0; //setzt die Minuten auf 0 zurück
        this.NumberofCalls = 0;
    }
    GetInfo(){
        return 'Vorname ' + this.firstname + ', Nachname ' + this.lastname + ', Telefonnummer ' + this.phonenumber + ', Minuten telefoniert ' + this.calledminutes + ';'
    }
    GetName(){
        return 'Vorname ' + this.firstname + ', Nachname ' + this.lastname + ';'
    }
    AvgMinutesPerCall(){
        for (let index = 0; index < phonecallArray.length; index++) {
            phonecallArray[index].calledminutes / phonecallArray.length;//rechnet den Durchschnitt aus
        }
    }
}


let phonecallArray = [];//Array, damit alle Kontaktdaten bagespeichert werden
//Hinzufügen von Kontaktdaten
buttonadd.onclick = function(){
    let addname = new Contacts(
        inputfirstname.value,   //Kontaktdaten werden in das Array abgespeichert
        inputlastname.value,
        Number(inputphonenumber.value),
    )
    phonecallArray.push(addname);
}
//Anzeigen von allen Kontakdaten
buttonshow.onclick = function (){
    output2.innerHTML = '';
    for (let index = 0; index < phonecallArray.length; index++) {   //geht das Array durch und gibt alle Kontakdaten (mit GetInfo) aus, die in dem Array drinnen stehen
        output2.innerHTML += phonecallArray[index].GetInfo() + '<br>';
    }
}
//Minuten von allen Kontaktdaten erhöhen
buttoncall.onclick = function (){
    for (let index = 0; index < phonecallArray.length; index++) {
        phonecallArray[index].calledminutes += Number(inputminutes.value);//geht das Array durch und rechnet dann die Minuten dazu
    }
}



