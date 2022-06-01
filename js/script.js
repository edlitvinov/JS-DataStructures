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

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function print(el) {
    console.log(el);
}

// num.forEach(print);  // вызваная функция будит выполняться для каждого элемента массива;
/*
function dubNum(n) {
    return n *2;
}
*/

const res = num.map(n => n * 2);

console.log(num);
console.log(res);


