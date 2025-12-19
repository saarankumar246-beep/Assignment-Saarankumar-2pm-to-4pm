const students = [
  ["Alice", 85],
  ["Bob", 92],
  ["Charlie", 78],
  ["Diana", 90]
];

students.forEach(student => {
  const [name, mark] = student;
  console.log(`name: ${name} | mark: ${mark}`);
})