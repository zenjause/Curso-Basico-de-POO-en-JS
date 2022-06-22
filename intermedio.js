//propiedades estaticas

/*const juan = {
    name : "Juanito",
    age: 19,
    approvedCourses: ["Curso 1"],
    addCourse (newCourse) {
        console.log("This", this );
        console.log("This.approvedCourses", this.approvedCourses );
        this.approvedCourses.push(newCourse);
    }
};

/*console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));*/


//obhect.defineproperty


/*Object.defineProperty(juan,"navigator",{
    value: "Chrome",
    enumerable:false,
    writable:true,
    configurable:true,
    
});
Object.defineProperty(juan,"editor",{
    value: "VSCode",
    enumerable:true,
    writable:false,
    configurable:true,
    
});
Object.defineProperty(juan,"terminal",{
    value: "WSL",
    enumerable:true,
    writable:true,
    configurable:false,
    
});
Object.defineProperty(juan,"pruebaNasa",{
    value: "extraterrestres",
    enumerable:false,
    writable:false,
    configurable:false,
    
});

//Object.seal(juan);
Object.freeze(juan);


console.log(Object.getOwnPropertyDescriptors(juan));*/


//formas de copiar con shallow copy


/*const obj1 = {
    a:"a",
    b:"b",
    c:{
        d:"d",
        e:"e",
    },
};

const obj2 = {};
for(prop in obj1){
    obj2[prop] = obj1[prop];
}

const obj3 = Object.assign({},obj1);
const obj4 = Object.create(obj1);*/


//JSON.parse y JSON.stringify


/*const obj1 = {
    a:"a",
    b:"b",
    c:{
        d:"d",
        e:"e",
    },
    editA(){
        this.a = "AAAAAA";
    }

    
};


const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);*/


//recursividad 

/*function recursiva (){
    if(){

    }else{
        
    }
};*/

//const numeritos = [0,1,2,3,4,5,6,7,8,9,234,211,547,312,53432,23,32,8,643,3];
/*let numerito = 0;
for(let index = 0; index < numeritos.length; index++){
    numerito = numeritos [index];
    console.log({index,numerito});
}*/

/*function recursiva(numbersArray){
    if (numbersArray.length != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        recursiva(numbersArray);
    }
};*/


// recursividad  deep copy 
/*const obj1 = {
    a:"a",
    b:"b",
    c:{
        d:"d",
        e:"e",
    },
    editA(){
        this.a = "AAAAAA";
    }

    
};*/


//abstraccion con objetos literales y deep copy

function isObject(subject){
    return typeof subject == "object";
}
function isArray(subject){
    return Array.isArray(subject);
}

function deepCopy(subject){
    let copySubject;

    const subjectIsObject = isObject(subject);
    const subjectIsArray = isArray(subject);


    if(subjectIsArray){
        copySubject = [];
    }else if(subjectIsObject){
        copySubject = {};
    }else{
        return subject;
    }
    
    for (key in subject){
        const keyIsObject = isObject(subject[key]);

        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key]);
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key]);
            }else{
                copySubject[key] = subject[key];
            }
        }
    }


    return copySubject;
};

/*const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourses: undefined,
    learningPaths: undefined,
    socialMedia:{
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    },
};*/

//const juan = deepCopy(studentBase);
/*Object.defineProperty(juan, "name", {
    value: "Juanito",
    configurable: false,
});*/
//Object.seal(juan);


//factory pattern y RORO

function requiredParam(param){
    throw new Error(param + " es obligatorio");
}

function createStudent({
    name = requiredParam("name"),
    email = requiredParam("email"),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourses = [],
    learningPaths = [],
} = {}){

    const private = {
        "_name": name,
    };

    const public = {
        email,
        age:18,
        learningPaths,
        socialMedia: {
            twitter,
            instagram,
            facebook,
        },
        
       readName (){
            
            return private["_name"];
        },
        changeName (newName){
            
            private["_name"] = newName;
        },
    };

    Object.defineProperty(public, "readName",{
        configurable:false,
        writable: false,
    });
    Object.defineProperty(public, "changeName",{
        configurable:false,
        writable: false,
    });

    return public;
        
        
       
    
};

const juan = createStudent({email: "juan@frijoles.com", name: "Juanito"});