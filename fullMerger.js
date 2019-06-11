const clonner = (obj) => {
    const clone = {};
    for (const key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            clone[key] = clonner(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }
    return clone;
}

const fullMerger = (objIn, donor) => {
    const result = clonner(objIn);

    for (const keyDonor in donor) {
        const valueKeyDonor = donor[keyDonor];

        console.log(valueKeyDonor + ' == ' + typeof valueKeyDonor);

        if (objIn.hasOwnProperty(keyDonor)) {
            if (Array.isArray(result[keyDonor]) && Array.isArray(valueKeyDonor)) {
                result[keyDonor] = result[keyDonor].concat(valueKeyDonor); //если оба параметра массивы - конкатенируем их
            } else if (Array.isArray(result[keyDonor]) || Array.isArray(valueKeyDonor)) {
                result[keyDonor] = valueKeyDonor; //если один из паарметров массив, то заменяем 1-ый на 2-ой
            } else if (typeof result[keyDonor] === 'object' && typeof valueKeyDonor === 'object') {
                result[keyDonor] = fullMerger(result[keyDonor], clonner(valueKeyDonor)); //оба объекты - рекурсивно вызываем метод
            } else if (typeof valueKeyDonor === 'object') {
                result[keyDonor] = clonner(valueKeyDonor); // если только 2-ой объект, то клонируем его и присваиваем заместо 1-го
            }
        } else {
            result[keyDonor] = valueKeyDonor;
        }
    }
    return result;
};

const a = {
    'id': 3,
    'newOBJ': {'len': 345 },
    'list': [1, 2, 3],
    'param': 23,
    'object': { 'value': 'TRUE' },
    'object11': [9999, 77777, 56777]
};
const b = {
    'id': 1001,
    'name': 'Vasy',
    'newOBJ': {'nel': 888 },
    'list': [4, 5, 6, 7],
    'param': true,
    'object': [9, 77, 567],
    'object11': { 'value': 'TRUEeeee' }
};

const res = fullMerger(a, b);
console.log(res);

