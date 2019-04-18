const res = (x, y) => {
    if(y > 1) {
        return x * res(x, y - 1);
    }
    return x;
}

console.log(res(2, 3));

//Вычислить сумму чисел до данного
const summer = (n) => {
    if (n > 0) {
        return n + summer(n - 1);
    }
    return n;
}

console.log(summer(4));

//Вычислить факториал
const fact = (n) => {
    if (n != 1) {
        return n * fact(n - 1);
    }
    return n;
}

console.log(fact(5));

//Числа Фибоначчи
const fiba = (n) => {
    if (n > 0) {
        return (n - n) + fiba(n - (n - 1));
    }
    return n;
}

console.log(fiba(7));