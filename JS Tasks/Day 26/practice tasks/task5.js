function createPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved successfully!");
    }, 1000);
  });
}

async function handlePromise(){
  const message = await createPromise();
  console.log(message);
}

handlePromise();