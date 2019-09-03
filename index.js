"use strict"

console.log('Hello World')
alert('Hello world')

// string
const name = 'Ridho Abdul Majid'

// number
const age = 25

// object
const bio = {
  age = 25,
  hobby: 'Reading',
  isMarried: false,
  activities : ['Read', 'Sleep', 'Code', 'Gaming']
};

// calling obj
console.log(bio.hobby);
bio["age"] += 1;

// array
const myHobbies = ['sleep', 'sleep', 'sleep'];

// calling array
console.log(myHobbies[0-2])

// json object catatan
// change from JSON to object
console.log(JSON.parse(variable));

// change from object to JSON
console.log(JSON.stringify(variable))