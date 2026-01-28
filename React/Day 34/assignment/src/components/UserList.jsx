
function UserList() {
  const users = [
    { id: 1, name: "Aman", age: 25, email: "aman@example.com" },
    { id: 2, name: "Riya", age: 22, email: "riya@example.com" },
    { id: 3, name: "Karan", age: 28, email: "karan@example.com" }
  ];

  return (
    <div className="app">
      <h1>User List</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
