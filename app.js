function sum(num1, num2) {
    return num1 + num2
}
sum(1, 2)

function names() {
    let myArray = ["Elishka", "Dan", "Ashley", "Connor", "Ben"]
    return myArray.sort()
  }
  names()

  function name() {
    let name = "Briony"
    return name.split("")
  }
  
  name() 


  function sortName() {
    let name = "codenation"
    return name.split("").sort()
  }
  sortName()
  

  function sliceName() {
    let name ="Benjamin"
    return name.slice(0, 3)
  }
  sliceName()



function myFunction() {
    let array1 = ["apple", "pear", "banana"]
    array1.push("kiwi")
    return array1
}

myFunction()

function myFunc2() {
    let str = "Hello briony";
    let newStr = str.split(' ');
    if(newStr[0].length < newStr[1].length){
        return newStr[1]
    } else {
        return newStr[0]
    }
}
myFunc2()

function age(birthYear, futureYear) {
   let gapYears=futureYear-birthYear;
   return gapYears
}

age(1988,2026);


function  circle(radius) {
   circumference = Math.floor(2 * Math.PI * radius)
   area = Math.floor(Math.PI * radius * radius)
   return circumference, area
}
circle(9)

function degrees(celcius) {
    farenheit = 1.8 * celcius + 32
    return celcius, farenheit
}
degrees(32)

function add(a, b){
    let num =[];
    let total=0;
    for (i=a; i <= b; i++){
    num.push(i);
  }
  
  let sum2= num.reduce(function(a, b) {
    return a + b;
  }, 0)
  return sum2
  }
  add(1, 5)

module.exports = {
    sum,
    names,
    name,
    sortName,
    sliceName,
    myFunction,
    myFunc2,
    age,
    circle,
    degrees,
    add
}






