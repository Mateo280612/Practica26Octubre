

function Persona (nombre,edad){
    this.nombre = nombre
    this.edad = edad
}

persona_1 = new Persona('Juan',30)
console.log(persona_1)

class Person{
    constructor (nombre,edad){
        this._nombre = nombre; 
        this._edad = edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }

    nombreEdad(){
        console.log('Nombre: '+this._nombre+' Edad: '+this._edad);
    }

    parametroExterno(valor){
        console.log(valor)
    }
}

person1 = new Person ('Juan',30);
console.log(person1);
person1.nombreEdad();
person1.parametroExterno('Nuevo Valor');

class Empleado extends Person{
    constructor(nombre,edad,sueldo){
        super (nombre,edad);
        this._sueldo = sueldo;
    }
    get sueldo(){
        return this._sueldo
    }

    set sueldo (sueldo){
        this._sueldo = sueldo
    }
}

empleado1 = new Empleado('Pedro',40,1000)
console.log(empleado1);
empleado1.nombreEdad();
