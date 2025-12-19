const num = [10,20,30,40];

const total = num.reduce((total,n) => {
    return total + n;
},0)

console.log(total);