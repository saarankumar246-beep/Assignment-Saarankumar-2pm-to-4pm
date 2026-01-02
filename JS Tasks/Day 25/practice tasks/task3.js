function stayHello(callback){
  setTimeout(() => {
    console.log("Hello")
    callback();
  },1000)
}

function afterHello(){
  console.log("this runs after hello");
}

stayHello(afterHello);