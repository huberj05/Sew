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

const inputFirstname = document.getElementById('inputFirstname');
const inputLastname = document.getElementById('inputLastname');
const inputBirthDate = document.getElementById('inputBirthDate');
const inputID = document.getElementById('inputID');
const output2 = document.getElementById('output2');

const btnSave = document.getElementById('btnSave');
const btnClear = document.getElementById('btnClear');
const btnShow = document.getElementById('btnShow');
const btnSearch = document.getElementById('btnSearch');

class SchoolClass {
  #className;
  #students;
  #maxStudents;
  constructor(className, maxStudents) {
    this.#className = className;
    this.#students = new Map();
    this.#maxStudents = maxStudents;
  }
  get className() {
    return this.#className;
  }
  get students() {
    return this.#students;
  }
  get maxStudents() {
    return this.#maxStudents;
  }
  addStudent(student) {
    if (this.#students.size < this.#maxStudents) {
      this.#students.set(student.id, student);
      return true;
    } else {
      // Klasse voll
      return false;
    }
  }
  getStudent(id) {
    let student = this.#students.get(id);
    if (student) {
      return student;
    }
    return null;
  }
  removeStudent(id) {
    return this.#students.remove(id);
  }
  findStudent(firstname, lastname) {
    for (let st of this.#students.values()) {
      if (st.firstname === firstname && st.lastname === lastname) {
        return st;
      }
    }
    return null;
  }
  clear() {
    this.#students.clear();
  }
  getStudentTable() {
    let studentTable = `<table class="table">
<thead>
<tr>
<th scope="col">#</th>
<th scope="col">id</th>
<th scope="col">firstName</th>
<th scope="col">lastName</th>
<th scope="col">birthDate</th>
</tr>
</thead>
<tbody>`;
    let i = 0;
    for (let student of this.#students.values()) {
      studentTable += `<tr><th scope="row">${++ i}</th>` + `<td>${student.id}</td>` + `<td>${student.firstName}</td>` +
                  `<td>${student.lastName}</td>` + `<td>${ (new Date(student.birthDate)).toLocaleDateString(
        'de-AT'
      )}</td>
</tr>`;
    }
    studentTable = studentTable + '</tbody></table>';
    if (this.#students.size >= this.#maxStudents) {
      studentTable = studentTable + '<div class="alert alert-warning" role="alert">Kl' +
                  'asse ist voll</div>';
    }
    return studentTable;
  }
}

class Student {

  #id;
  #firstName;
  #lastName;
  #birthDate;
  static #idCounter = 1; // Statische Variablen sind in allen Instanzen gleich

  constructor(firstName, lastName, birthDate) {
    this.#id = Student.#idCounter++;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#birthDate = birthDate;
  }
  get firstName() {
    return this.#firstName;
  }
  get lastName() {
    return this.#lastName;
  }
  get birthDate() {
    return this.#birthDate;
  }
  get id() {
    return this.#id;
  }

  static get idCounter() {
    return Student.#idCounter;
  }


  getInfo(){
    return 'id : ' +this.#id + ' firstname : ' +this.#firstName + ' lastname : ' + this.#lastName + 'birtdate : ' + this.#birthDate + ';';
  }
}

btnSave.onclick = function () {
  const FirstName = inputFirstname.value;
  const LastName = inputLastname.value;
  const BirthDate = inputBirthDate.value;

  let NewStudent = new Student(FirstName, LastName, BirthDate);

  studentsinventory.addStudent(NewStudent);
};

btnClear.onclick = function () {
  studentsinventory.clear();
  btnShow.onclick();
};

btnShow.onclick = function () {
  output2.innerHTML = studentsinventory.getStudentTable();
};


btnSearch.onclick = function(){
  output2.innerHTML = '';
  for(const student of studentsinventory.students){
    if(student[0] == inputID.value){
      output2.innerHTML = student[1].getInfo();
    }
  }
};


let studentsinventory = new SchoolClass('4AHITS', 5);

//btn show funktioniert nicht