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

    
};


const stringifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(stringifiedComplexObj);*/


//recursividad 

/*function recursiva (){
    if(){

    }else{
        
    }
};*/

const numeritos = [0,1,2,3,4,5,6,7,8,9,234,211,547,312,53432,23,32,8,643,3];
/*let numerito = 0;
for(let index = 0; index < numeritos.length; index++){
    numerito = numeritos [index];
    console.log({index,numerito});
}*/

function recursiva(numbersArray){
    if (numbersArray.length != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        recursiva(numbersArray);
    }
};
