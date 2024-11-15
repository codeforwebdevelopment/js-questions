constructor(){

    let emp = new Employee(10, "John");
    
    // emp.id = 20; //Compiler Error
    
    emp.name = 'Bill';
    
    console.log(emp) // Employee {id: 10, name: "Bill"}
    
    }
    
    class Employee {
    
        readonly id: number;
    
        name: string;
    
        constructor(id: number, name: string)     {
    
            this.id = id;
    
            this.name = name;
    
        }
    
    }