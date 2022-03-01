/*
Project: uebung06_students
Author:  Julian Huber
Date:    16.11.2021
*/

'use strict';
const appName = 'Classes - Students';
document.getElementById('myTitle').innerText = appName;
document.getElementById('myHeading1').innerText = appName;


const inputfirstname = document.getElementById('firstname');
const inputlastname = document.getElementById('lastname');
const inputlearned = document.getElementById('learned');
const inputsemester = document.getElementById('semester');

const buttonadd = document.getElementById('add');
const buttonclear = document.getElementById('Clear');
const buttonlearn = document.getElementById('learn');
const buttonshow = document.getElementById('show');

const output2 = document.getElementById('output2');

let studentid = 0;

class Student {

    constructor(firstname,lastname,semester,hourslearned,id){
        this.firstname = firstname;
        this.lastname = lastname;
        this.semester = semester;
        this.hourslearned = hourslearned;
        this.id = id;
    }
    getInfo(){
        return ' ID: ' + this.id + ' Firstname ' + this.firstname + ' Lastname ' + this.lastname + ' Semester: ' + this.semester + ' hourslearned: ' + this.hourslearned + '<br>'
    }

    learn(hours){
        this.hourslearned+=hours;
        if (this.hourslearned < 0){
            return false;
        } else {
            return true;
        }
    }
}

let StudentsArray = [];

buttonadd.onclick = function(){
    if (inputfirstname.value == '' || inputlastname.value ==''){
        return alert('Bitte einen Namen/Nachnamen eingeben!');
    } else {
         studentid += 1;
    }
    let addstudents = new Student(
        inputfirstname.value,
        inputlastname.value,
        Number(inputsemester.value),
        Number(inputlearned.value),
        Number(studentid),
    )

    StudentsArray.push(addstudents);
}

buttonclear.onclick = function(){
    StudentsArray = [];
}

buttonshow.onclick = function (){
    output2.innerHTML = '';
    for (let index = 0; index < StudentsArray.length; index++) {
        output2.innerHTML += StudentsArray[index].getInfo();
    }
}

buttonclear.onclick = function (){
    StudentsArray = '';
}
/*
buttonlearn.onclick = function (){
    for (let index = 0; index < array.length; index++) {
        output2.innerHTML += StudentsArray[index].getInfo();
    }
}
*/
