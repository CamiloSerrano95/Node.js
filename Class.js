class Polygon {

    constructor (high, width){
        this.high = high;
        this.width = width;
    }

    calcArea(){

        return this.high * this.width;
    }

    get area(){

        return this.calcArea;
    }

}

const square = new Polygon(20,20);

console.log("El area del cuadrado es: " + square.area());

/*************************************************************************************/

class person {

    constructor(name, lastname, age){
        this.name = name;
        this.lastname = lastname;
        this.age = age;
    }

    info(){

        return "Tu nombre es " + this.name + " " + this.lastname + " y tienes " + this.age + " años"; 
    }
}

const personOne = new person ("Camilo", "Serrano", 21);

console.log(personOne.info());