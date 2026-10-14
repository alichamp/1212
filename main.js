let name = "Али";
let age = 20;
let isStudent = true;
let emptyValue = null;
let notDefined;   

console.log("Значения переменных:");
console.log(name);
console.log(age);
console.log(isStudent);
console.log(emptyValue);
console.log(notDefined);

console.log("Типы данных");
console.log("имя: " + typeof name);     
console.log("возраст: " + typeof age);      
console.log("студент: " + typeof isStudent); 
console.log("пустое значение: " + typeof emptyValue); 
console.log("не определено: " + typeof notDefined);  

let person = {
    name: "Али",
    age: 20,
    isStudent: true
};

console.log("Объект person:");
console.log("Меня зовут: " + person.name + ", мне " + person.age + " лет");

let myFavorites = [
    "Delta Force", 
    "Call of Duty", 
    "Counter-Strike 2", 
    "Mortal Kombat", 
    "THE FINALS" 
];
console.log("Мои любимые игры:");
console.log(myFavorites);