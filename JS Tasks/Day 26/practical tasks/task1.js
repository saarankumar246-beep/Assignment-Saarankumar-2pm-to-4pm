function createCounter(){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
}

let counter = createCounter();

counter();
counter();
counter();