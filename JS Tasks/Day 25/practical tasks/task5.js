const users = [
  { username: "alice", password: "1234" },
  { username: "bob", password: "abcd" },
];

function mockLoginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        const user = users.find(u => u.username === username && u.password === password);
        
        if(user){
          resolve({success: true, message: "Login successful", user});
        }else{
          reject({success: false, message: "Invalid credentials"});
        }
    },1000)
  })
}

async function login(username, password){
  try{
    const res = await mockLoginApi(username, password);
    console.log(res.message);
    return res.user;
  }
  catch(error){
    console.log(error.message);
    return null;
  }
}

(async () => {
  const user1 = await login("alice", "1234"); // Correct credentials
  console.log("Logged in user:", user1);

  const user2 = await login("bob", "wrong"); // Incorrect credentials
  console.log("Logged in user:", user2);
})();