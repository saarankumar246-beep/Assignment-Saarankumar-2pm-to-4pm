class Shape{
  area(){
    return 0;
  }
}

class Circle extends Shape{
  constructor(radius){
    super();
    this.radius = radius;
  }

  area(){
    return Math.PI * this.radius * this.radius;
  }
}

const c1 = new Circle(5);
console.log(c1.area())