//task 1:
//q1
for (var i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
}

//s1
// var: is function scope, mean after loop, i will be 4 (it overive all i before)
// and setTimeout with delay 0 second alway push this task to queue, and run after main thread finish (mean for loop finish)
// let : is block scope, mean each settimeout call, value of i is diffirent: 0, 1, 2, 3
for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
}




//q2
// Find solution (fix the code) from code below, keyword this​ is required in this case:
//s2
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.running = (place) => {
        return `${this.name} age of ${this.age} likes to run in ${place}`;
    }
}

var x = new Person('Senayan', 20);
console.log(x.running('some where')) // name and age undefined




//q3
//3. Find solution (fix the code) from code below:
var Person2 = function (fullName) {
    this.fullName = fullName;
    this.walking = () => {
        return `${this.fullName} is walking`;
    }
}

Person2.prototype.running = function () {
    return `${this.walking()} and then running`;
}
var y = new Person2('John Doe');
console.log(y.running())




//q4:
//Explain variable A is working but variable B shows NaN, and what is this terms called?
var a = [1,2,3,4]+[5,6,7,8]; // it convert to string, then add 2 string.
var b = [1,2,3,4]-[5,6,7,8]; // it convert to number, then subtract and get NaN

console.log(a, a.length, typeof a, b)