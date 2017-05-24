// let limit = 200;
//
// {
//   let limit = 10;
//   console.log('bacckstage limit :', limit)
// }
//
// console.log('overall limit:',limit);


// function hello(){
//   let message = "Srivatsa!";
//   console.log(message);
// }
//
// function greeting(){
//   let message="How are you ?";
//   console.log(message);
// }
//
// hello();
// greeting();


// let a = 'good';
// let greeting  = `${a} morning`;
// console.log(greeting);

// let a = [20,30,40];
// let b = [10, ...a, 50];
// console.log(b);

// let a = ['sri','eric', 'frank'];
// let b = ['alice', 'bob', ...a];
// console.log(b);

// function collect(...a){
//   console.log(a);
// }
//
// collect(3,45,6,78,90,-123);

// let z = [4, 5, 6];
// let four = z[0];
// let five = z[1];
// console.log(four, five);

// let z = [4, 5, 6];
// let [four,five] = z;
//
// console.log(four, five);

// var cheer = function(){
//   console.log("Oh the weather is cool!!");
// }
//
// cheer();

// setTimeout(() => {
//   console.log('Oh the shit')
// },3000);

// let cheer = () => {
//   console.log('I love myself');
// }
//
// cheer();


// let values = [20,30,40];
//
// let double = (n) => {
//   return n * 2;
// }
//
// let doubled = values.map(double);
// console.log(doubled);

// let values = [20,30,40];
//
// let doubled = values.map((n) => {return n * 2});
// console.log(doubled);

// let points = [35,25,15,8,50, 12, 7];
//
// let highScores = points.filter((n) => {
//   return n > 15;
// });
//
// console.log(highScores);

// let b = "Srivatsa" + " ".repeat(10) + "Shankaran";
// console.log(b);

// let b = `srivatsa${"shankaran".repeat(50)}`;
// console.log(b);

// console.log("butterfly".startsWith("butter"));
// console.log("butterfly".endsWith("fly"));
// console.log("butterfly".includes("butter"));


// const addToCart = (item , number) => {
//   return Number.isFinite(number);
// }
//
// console.log(addToCart('shirt', Infinity));

// import { fellowship, total } from './fellowship';
// console.log(fellowship, total);

// import { add, multiply } from './math';
// console.log(add(5,50), multiply(7,70));

// import Animal from './Animal';
//
// let king = new Animal('Tiger', 5.5);
// console.log(king);
// king.hello();
//
// class Lion extends Animal{
//   constructor(name, height, color){
//     super(name, height);
//     this.color = color;
//   }
//
//   hello(){
//     console.log(`hi i'm ${this.name} from pride rock`)
//   }
// }
//
//
// let son = new Lion('Simba', 3.5, 'green');
// console.log(son);
// son.hello();

// class Calculator{
//   static multiply(a,b){
//     return a*b;
//   }
//
//   static add(a,b){
//     return a + b;
//   }
// }
//
// let a = Calculator.add(5,7);
// console.log(a);

// function Wizard(name, house, pet) {
//   this.name = name;
//   this.house = house;
//   this.pet = pet;
//
//   this.greet = () => {
//     return `I'm ${this.name} from ${this.house}`;
//   }
// }
//
// Wizard.prototype.pet_name;
//
// Wizard.prototype.info = function(){
//   return `I have a ${this.pet} named ${this.pet_name}`;
// }
//
// let harry = new Wizard("Harry Potter", "Gryffindor", "Owl");
// harry.pet_name = 'lebbie';
// console.log(harry);
// console.log(harry.greet());
// console.log(harry.info());

// let a = new Set();
// a.add(5);
// a.add(55);
// a.add('Srivatsa');
// a.add({ x: 50, y: 200});
// console.log(a.size);
// console.log(a.has(5));

// let numbers = [5,7,8,13,17];
// let numSet = new Set(numbers);
// console.log(numSet);
//
// for(let element of numSet.values()){
//   console.log(element);
// }

// let chars = 'asvdvgyukyewfvlfwgufolfhofch';
// let chars_arr = chars.split('');
// console.log(chars_arr);
// let chars_set = new Set(chars_arr);
// console.log(chars_set);

//new data structure called maps
// let a = new Map();
// let key1 = "string key";
// let key2 = {a : 'key'};
//
// a.set(key1, "return value for a string key");
// a.set(key2, 'return value for a object key');
// console.log(a);

// let numArr = [[1,'one'],[2,'two'],[3,'three']];
// let valMap = new Map(numArr);
// console.log(valMap);
//
// for(let [key, value] of valMap.entries()){
//   console.log(`${key} points to our ${value}`);
// }

let string = 'asheuwicheafaabvidzvlvvbu';
let letters = new Map();
for(let i = 0; i < string.length; i++){
  let letter = string[i];
  if(!letters.has(letter)){
    letters.set(letter, 1);
  }else{
    letters.set(letter, letters.get(letter) + 1);
  }
}

console.log(letters);
