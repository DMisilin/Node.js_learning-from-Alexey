const fullClonner = (object) => {
    const result = {};
    for (let v in object) {
        if (typeof object[v] === 'object') {
            result[v] = fullClonner(object[v]);
        } else {
            result[v] = object[v];
        }
    }
    return result;
}

const b = {
    'id': 3,
    'name': 'Lif',
    'ob': {
        'dd': 34,
        'mail': 'yyy@ya.ru',
        'fam': {
            'par': 'fath',
            'age': 33
        } 
    }
}

const clone = fullClonner(b);
console.log(`################## b before ###################!`);
console.log(b);

b.ob.dd = 55

console.log(`################# clone ####################!`);
console.log(clone);
console.log(`################## b after ###################!`);
console.log(b);
console.log(`################# clone after ####################!`);
console.log(clone);

