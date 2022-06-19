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

const