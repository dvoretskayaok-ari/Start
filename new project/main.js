function checkAgeCategory(age) {
if (age < 13) {
    console.log('Дитина');
}
else if (age >= 13 && age <= 19) {
    console.log('Підліток');
}
else if (age >= 20 && age <= 59) {
    console.log('Дорослий');
}
else {
    console.log('Пенсіонер');
}
}
checkAgeCategory(59);
function greet(text, name = 'Anonim') {
    console.log(text + " Hello, " + name);
}
greet("From");
function sum(a, b = 1) {
    return a + b;
}
let result = sum(15);
console.log(result);
let square = function(x) {
    return x * x;
};
console.log(square(6));
let multiply = (a, b = 2) => a * b;
console.log(multiply(8, 5));
function factorial(n) {
    if (n <= 1) {
        return 1;
}
return n * factorial(n - 1);
}
console.log(factorial(9));

const numbers = [42, 3, 105, -7, 18, 4];
function findMin(numbers) {
    let min = numbers[0];
    for (let index = 1; index < numbers.length; index++) {
        if (numbers [index] < min) {
            min = numbers [index];
        }
    }
    return min;
}
console.log(findMin(numbers));

const paragraph = document.querySelector('p');
paragraph.classList.add('active');
paragraph.classList.remove('first');
paragraph.setAttribute('id', 'info');
paragraph.removeAttribute('id');
paragraph.addEventListener('click',() => {
    paragraph.style.color = 'green';
})
const header = document.querySelector('h1');
console.log(header);
header.addEventListener('click', () => {
   header.style.backgroundColor = 'red';
   header.style.color = 'blue';
   header.style.fontSize = '100px'; 
})
