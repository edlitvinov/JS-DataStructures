// Imutable - не изменяемый

/*
const arr = [1, 2, 3, 4, 5];

const newArr = arr.slice(0, 5);

const newArr2 = [-1, 0, 'hello!', ...newArr, ...arr];

// console.log(arr);
// console.log(newArr);
// console.log(newArr2);

const obj = {
    a: 1,
    b: 2,
    c: 3
};

const obj2 = {
    ...obj,
    d: 4,
    e: 5
};

console.log(obj);
console.log(obj2);
*/

// Maping
// map, forEach

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function print(el) {
//     console.log(el);
// }

// num.forEach(print);  // вызваная функция будит выполняться для каждого элемента массива;
/*
function dubNum(n) {
    return n *2;
}
*/

// const res = num.map(n => n * 2);

// console.log(num);
// console.log(res);

// Filter
// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const use = [           // коллекция
// {
//     id: 1,
//     name: 'Brad',
//     isMarried: true 
// },
// {
//     id: 2,
//     name: 'Diana',
//     isMarried: false
// },
// {
//     id: 3,
//     name: 'Olivie',
//     isMarried: true
// },
// {
//     id: 4,
//     name: 'Scott',
//     isMarried: false
// }
// ];

// const marrUse = use.filter(use => use.isMarried);
// console.log(marrUse);

// const oddNum = num.filter(n => n % 2 !== 0);
// const evNum = num.filter(n => n % 2 === 0);

// console.log(oddNum);
// console.log(evNum);
// console.log(num);

// Reduce
/*
const staff = [
    {
        id: 1,
        name: 'John',
        salary: 1000
    },
    {
       id: 2,
        name: 'Sara',
        salary: 900 
    },
    {
       id: 3,
        name: 'Elton',
        salary: 1100  
    },
    {
       id: 4,
        name: 'Mo',
        salary: 1000 
    }
];

const budjet = staff.reduce((acc, user) => {       // возвращает любую структуру данных
    return acc + user.salary;
}, 0);       
console.log(budjet);

const budgetFor = staff.reduce((acc, user) => {
    if (user.salary < 1000) {
        return acc + user.salary
    }

    return acc;
}, 0);

console.log(budgetFor);

*/

// find in collection

/*
const developers = [
    {
        id: 1,
        fullName: 'John Doe',
        skills: ['HTML', 'CSS', 'JavaScript'],
        area: 'frontend'
    },
    {
        id: 2,
        fullName: 'Adam Smith',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        area: 'frontend'
    },
    {
        id: 3,
        fullName: 'Will Dowson',
        skils: ['HTML', 'PHP', 'Laravel'],
        area: 'backend',
    },
    {
        id: 4,
        fullName: 'Sam Wilson',
        skills: ['HTML', 'CSS', 'JavaScript', 'PHP'],
        area: 'fullatack'
    }
];
console.log(developers.find(item => item.area === 'frontend'));
*/
/*
const cities = ['London', 'Paris', 'Madrid', 'Lisboa'];
cities.includes['Madrid']; // true/false
cities.indexOf('Paris'); // 1
*/

// Sort

const num = [10, 13, 1, 2, 3, 4, 5, 6];
num.sort();
console.log(num);

