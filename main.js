//objeto literal

const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados:[
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
};

natalia.cursosAprobados.push("Curso de Responsive Design");

//objeto prototipo

function Student(name, age,cursosAprobados){
    this.name = name;
    this.age  = age;
    this.cursosAprobados = cursosAprobados;
    /*this.aprobarCurso = function (nuevoCurso){

        this.cursosAprobados.push(nuevoCurso);
    }*/
};

Student.prototype.aprobarCurso = this.aprobarCurso = function (nuevoCurso){

    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
    "Juanita Alejandra",
    15,
    [
        "Curso de Introduccion a la Produccion de Videojuegos",
        "Curso de Creacion de Peronajes",
    ],
    );

    // Prototipos con la sintaxis de clases

    class Student2{
        constructor({
            name,
            age,
            cursosAprobados = [],
            email,
         
        }){
            this.name = name;
            this.age  = age;
            this.cursosAprobados = cursosAprobados;
            this.email = email;
        }

        aprobarCurso(nuevoCurso){
            this.cursosAprobados.push(nuevoCurso)
        }
    }

    const miguelito = new Student2({
        email: "miguelito@gamil.com",
        age: 28,
        name: "Miguel",
        cursosAprobados : [
            "Curso Analisis de Negocios",
            "Curso de Principios de Visualizacion",
        ],
    }
       
    );