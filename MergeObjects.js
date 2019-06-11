const a = {
    a: 1,
    b: {
        B1: '123',
        B2: false,
        B3: {
            bb44: 34,
            bb55: '23'
        }
    },
    c: [12, 26, 55, 34],
    d: true
}
const b = {
    a: 123,
    b: {
        val1: 123,
        val2: '234',
        B3: {
            bb44: 34,
            bb55: '2333333'
        }
    },
    c: ['sdf', 'DDf']
}

const res = {};
Object.assign(res, a);

console.log(res);

res.a = 'title';
console.log(res);
console.log(a);