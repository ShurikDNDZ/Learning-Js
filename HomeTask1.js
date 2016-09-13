//Home Task #1

//ES 5:
//Variables

var name = 'Alexander';
var age = 30;
var hasDriverLicense = true;
var grades = [3, 5, 4, 2, 4];
var person = {
  name : 'Alexander',
  age : 30,
  hasDriverLicense : true,
  grades : [3, 5, 4, 2, 4]
};
document.write(grades[1] + '<br>');
document.write(person.name);

//Conditions

var num1 = 5;
var num2 = 7;
if (num1 > num2) document.write('Number one is bigger')
else document.write('Number two is bigger');

//Functions
var a = +prompt('a= ');
var b = +prompt('b= ');
var c = +prompt('c= ');
function calc(a,b,c){
  return a+b+c;
}
document.write(calc(a,b,c));