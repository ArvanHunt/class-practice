// const student = {
//     name : "arvan",
//     marks : 81,
//     printMarks : function() {
//         console.log("marks = " ,this.marks);
//     },
// }

// ------------**** P R O T O T Y P E ****

// const employee = {
//     calcTax() {
//         console.log("tax rete is 10%");
//     },
// };

// const karan = {
//     salary : 50000,
// }

// const karan1 = {
//     salary : 50000,
//     calcTax() {
//         console.log("tax rate is 20%");
//     }
// }
// karan.__proto__= employee;
// karan1.__proto__= employee;

// ---------------**** C L A S S ****


// class car {
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
// };

// let rangeRover = new car();

// -------------**** C O N S T R U C T O R ****

// intializes object

// class car {
//     constructor(brand) {
//         console.log("creating a object");
//         this.brandName = brand;
//     }
//         start() {
//             console.log("start");
//         }
//         stop() {
//             console.log("stop");
//         }
//     };
    
//     let rangeRover = new car("rangeRover");
//     let lexus = new car("lexus");

// ------------------**** I N H E R I T E N C E ****

// class parent {
//     hello() {
//         console.log("hello");
//     }
// };

// class child extends parent{
    
// }

// let obj = new child();

// class person {
//     constructor() {
//         this.species = "homo sapiens";
//     }

//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }
// }

// class developer extends person{
//     work() {
//         console.log("build code");
//     }
// }

// class doctor extends person {
//     work() {
//         console.log("health related");
//     }
// }

// let arvan = new developer();
// let appu = new doctor();

// ----------------------**** S U P E R  K E Y W O R D ***

//1) The super keyword is used to call the constructor of its parent class 
// to access the parent's properties and methods  

//2) Accessing the parents properties from child class

//3) super() means invoking the parent constructor

class person {
    constructor() {
        console.log("enter parent constructor");    //---for reference
        this.species = "homo sapiens";
    }

    eat() {
        console.log("eat");
    }
}

class developer extends person{
    constructor(front) {
        console.log("enter child construtor");   //---for reference
        super();     //----- Note : To invoke parent constructor
        this.designation = "front";
            console.log("exiot child constructor");   //---for reference
    }
    work() {
        super.eat();  //----- Note : accessed the parent constructor
        console.log("build code");
    }
}

class doctor extends person {
    work() {
        console.log("health related");
    }
}

let arvan1 = new developer();
let appu1 = new doctor();
