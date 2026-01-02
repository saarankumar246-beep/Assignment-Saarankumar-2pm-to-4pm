function fakeApiCall(){
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const success = true;

      if (success) {
        resolve("Data is received");
      } else {
        reject("Data is not received");
      }
    },2000)
  })
}

fakeApiCall()
.then(data => {
  console.log(data);
})
.catch(error => {
  console.log(error);
})