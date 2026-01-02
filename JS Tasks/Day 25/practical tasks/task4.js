async function fetchUser(userId) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

fetchUser(1);
