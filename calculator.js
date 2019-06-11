const sum = (val) => {

    let currentSum = val;
  
    const f = (b) => {
      currentSum += b;
      return f;
    }
  
    f.toString = () => {
      return currentSum;
    };

    // f.valueOf = () => {
    //   return currentSum;
    // }
  
    return f;
  }

const result = sum(6)(2)(1)(5);
console.log('result:', result);

