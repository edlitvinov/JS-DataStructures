// Imutable - не изменяемый

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


