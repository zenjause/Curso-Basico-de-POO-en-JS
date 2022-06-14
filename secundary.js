class Comment{
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.like = 0;
    }

    publicar (){
        console.log(this.studentName + "(" + this.studentRole + ")");
        console.log(this.likes + "likes");
        console.log(this.content);
    }
}





class clasesitas{
    constructor({
        name,
        tema = [],
    }){
        this.name = name;
        this.tema = tema;
    }
};

const ClaseDeComputacion = new clasesitas({
    name: "Clase de computacion",
    tema: "iniciando",
});

const ClaseDeEditoresDeTexto = new clasesitas({
    name: "Clase de Editores de Texto",
    tema: "iniciando",
});
const ClaseDeManejoDeLaTerminal = new clasesitas({
    name: "Clase de Manejo de la Terminal",
    tema: "iniciando",
});
const ClaseDeManejoDeVS = new clasesitas({
    name: "Clase de Manejo de VS",
    tema: "iniciando",
});


class Course {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish",
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name (){
        return this._name;
    }

    set name(nuevoNombrecito){
        if(nuevoNombrecito === "Curso Malito de Programacion"){
            console.error ("web .... no response");
        }else{
            this._name = nuevoNombrecito;
        }
         
        
    }

};

 

const cursoProgBasica = new Course({
    name: "Curso de Programacion Basica Gratis",
    isFree: true,
    classes:[
            ClaseDeComputacion    ]

});
cursoProgBasica.name = "Curso de Programacion Basica Gratis";

const cursoDefinitivoHTML = new Course({
    name: "Curso Definitivo de HTML y CSS",
    
    classes:[
        ClaseDeEditoresDeTexto,
        ClaseDeManejoDeLaTerminal,
    ]
});



const cursoPracticoHTML = new Course({
    name: "Curso Practico de HTML y CSS",
    lang:"english",
    
    classes:[
        ClaseDeEditoresDeTexto,
        ClaseDeManejoDeVS,
        ClaseDeManejoDeLaTerminal,
    ]
});
const cursoDataBussines = new Course({
    name: "Curso DataBussines",
    
    classes:[
        ClaseDeManejoDeVS,
        ClaseDeManejoDeLaTerminal,
    ]
});

const cursoDataViz = new Course({
    name: "Curso DataViz",
    
    classes:[
        ClaseDeEditoresDeTexto,
        ClaseDeManejoDeLaTerminal,
    ]
});

const cursoUnity = new Course({
    name: "Curso Unity",
    
    classes:[
        ClaseDeEditoresDeTexto,
        ClaseDeManejoDeLaTerminal,
    ]
});
const cursoUnreal = new Course({
    name: "Curso Unreal",
    
    classes:[
        ClaseDeEditoresDeTexto,
        ClaseDeManejoDeLaTerminal,
    ]
});


class LearningPath{
    constructor({
        name,
        courses = [],
    }
        
    ){
        this.name = name;
        this.courses = courses;
    }
    get name (){
        return this._name;
    }

    set name(nuevoEscuela){
        if(nuevoEscuela === "Escuela Aburrida"){
            console.error ("web .... no response");
        }else{
            this._name = nuevoEscuela;
        }
         
        
    }
};



const escuelaWeb = new LearningPath({
    name: "Escuela de Desarrollo Web",
    courses:[
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
        
    ],
});

escuelaWeb.name = "Escuela de Desarrollo Web";


const escuelaData = new LearningPath({
    name: "Escuela de Data",
    courses:[
        cursoProgBasica,

        cursoDataBussines,
        cursoDataViz,
        
    ],
});
const escuelaVideojuegos = new LearningPath({
    name: "Escuela de Videojuegos",
    courses:[
        cursoProgBasica,

        cursoUnity,
        cursoUnreal,
        
    ],
});







class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram =undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths   =[],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = [] = approvedCourses;
        this.learningPaths   =[]  = learningPaths;
    };

    publicarComentario(commentContent){
        const commnet = new Comment({
            content: commentContent,
            studentName: this.name,
        });

        commnet.publicar();
    }
};

class FreeStudent extends Student{
    constructor(props){
        super(props);
    } 

    approveCourse(newCourse){
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos," + this.name + ",solo puedes tomar cursos abiertos");
        }
    }
};

class BasicStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos," + this.name + ",no puedes tomar cursos en ingles");
        }
    }
};



class ExpertStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
            this.approvedCourses.push(newCourse);
       
        }
    
};

class TeacherStudent extends Student{
    constructor(props){
        super(props);
    }

    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }

    publicarComentario(commentContent){
        const commnet = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor",
        });

        commnet.publicar();
    }
}


const juan2 = new FreeStudent({
    name: "JuanDC",
    username: "juandcz",
    email: "juanito@juanito.com", 
    twitter: "zjuanitodc",
    learningPaths:[
        escuelaWeb,
        escuelaVideojuegos,
    ]
});

const miguelito2 = new BasicStudent({
    name: "Miguelito2",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com", 
    instagram: "zmiguelitodc",
    learningPaths:[
        escuelaWeb,
        escuelaData,
    ]
});

const natalia2 = new Student({
    name: "Nath2",
    username: "natita",
    email: "nathz@juanito.com", 
    instagram: "nataliadc",
    learningPaths:[
        escuelaWeb,
        escuelaData,
        escuelaVideojuegos,
    ]
});

const freddy = new TeacherStudent({
    name: "freddy vega",
    username: "fredd ",
    email: "fredy@juanito.com", 
    instagram: "freddypro",
   
});