class Student{
  constructor(name, age, rollno){
    this.name = name;
    this.age = age;
    this.rollno = rollno;
  }

  display(){
    console.log("Name: ", this.name ,"| Age:", this.age,"| Roll NO:", this.rollno);
  }
}

const s1 = new Student("Saaran",22,36);
const s2 = new Student("Aaron",23,37);
const s3 = new Student("Vijay",20,38);

s1.display();
s2.display();
s3.display();