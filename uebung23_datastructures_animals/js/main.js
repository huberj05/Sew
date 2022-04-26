// Template Version: 2021_11_10
/*
Project: Aufgabenblatt23 - Datastructures - Animals
Author: Julian Huber
Date:    19.04.2022
*/

'use strict';
const appName = 'Aufgabenblatt23 - Datastructures - Animals';


class Animal{
  constructor(name, age, animaletype){
    this.name = name;
    this.age = age;
    this.animaletype = animaletype;
  }
}

let animals= [ 
  new Animal('Rex',3,'dog'),
  new Animal('Bello',6,'dog'),
  new Animal('Tom',1,'cat'),
  new Animal('Max',4,'cat'),
  new Animal('Carlo',4,'cat'),
  new Animal('Rex',2,'dog'),
]; 

//Nach Namen Sortiert
let Animals1 = animals.sort((a1, a2) =>a1.name.localeCompare(a2.name));
//console.log(Animals1);

/* Probiert mit function hat aber mit der Ausgabe nicht funktioniert. Mache mit let weiter
function SortAnimals1(){
 animals.sort((a1, a2) =>a1.name.localeCompare(a2.name));
}console.log(animals)
*/

//Sortiert aber zuerst mit Katzen 
let sortedAnimals2 = animals.sort((a,b)=> a.animaletype.localeCompare(b.animaletype)).sort((a,b)=> {if(a.animaletype ==b.animaletype) {
  a.name.localeCompare(b.name);
  }
    });
// console.log(sortedAnimals2);

//Erstellt neues Array mit allen Tiernamen
let AnimalsArray = animals.map(a => a.name);
 //console.log(AnimalsArray);

//Erhöht age um 1
animals.forEach(a => a.age+1);
 //console.log(animals);

//Erzeugt ein Array mit allen Hunden
let DogArray = animals.filter(a=> a.animaletype == 'dog');
 //console.log(DogArray);

//Sucht Max und erzeugt neues Array mit Max
let MaxArray = animals.filter(a=> a.name == 'Max');
 //console.log(MaxArray);

//Sucht alle Katzen mindestens 3 Jahre alt sind
let Catsagefinder = animals.filter(a=> a.age>=3&&a.animaletype == 'cat');
 //console.log(Catsagefinder);

//Summiert jedes Alter von den Animals
let AnimalAgesum = animals.map(a=> a.age).reduce((sum,current)=> sum+current);
 //console.log(AnimalAgesum);

//Summiert jedes Hundealter
let DogAgeSum = animals.filter(a=> a.animaletype =='dog').map(a=> a.age).reduce((sum,current)=> sum+current);
 //console.log(DogAgeSum);

//Summiert jedes Katzenalter
let CatAgeSum = animals.filter(a=> a.animaletype =='cat').map(a=> a.age).reduce((sum,current)=> sum+current);
 console.log(CatAgeSum);

