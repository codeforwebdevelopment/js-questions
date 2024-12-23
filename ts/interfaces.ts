// interface -
// An interface is like an abstract base class. Any class or struct that implements the interface must implement all its members. 
// An interface can't be instantiated directly. Its members are implemented by any class or struct that implements the interface. 
// Interfaces can contain events, indexers, methods, and properties.
// Interfaces are useful when:
// The specification defines a set of related methods that will be called.
// A class typically implements the specification only once.
// The caller of the interface wants to cast to or from the interface type to obtain other interfaces or classes.

// Abstract classes Vs Interfaces
// Abstract classes can have implementations for some of its members (Methods), but the interface can't have implementation for any of its members.
// Interfaces cannot have fields where as an abstract class can have fields.
// An interface can inherit from another interface only and cannot inherit from an abstract class, where as an abstract class can inherit from another abstract class or another interface.
// A class can inherit from multiple interfaces at the same time, where as a class cannot inherit from multiple classes at the same time.
// Abstract class members can have access modifiers where as interface members cannot have access modifiers.


// Multiple Class immeritance Problem
// CLASS A
// CLASS B
// CLASS C
// CLASS D

// 1. Class B and Class C inherit from Class A.
// 2. Class D inherits from both B and C.
// 3. If a method in D calls a method defined in A (and does not override the method), and B and C have overridden that method differently, then from which class does it inherit: B, or C?
// This ambiguity is called as Diamond problem

// Interfaces
// We create interfaces using interface keyword. Just like classes interfaces also contains properties, methods, delegates or events, but only declarations and no implementations.
// It is a compile time error to provide implementations for any interface member.
// Interface members are public by default, and they don't allow explicit access modifiers.
// Interfaces cannot contain fields.
// If a class or a struct inherits from an interface, it must provide implementation for all interface members. Otherwise, we get a compiler error.
// A class or a struct can inherit from more than one interface at the same time, but whereas, a class cannot inherit from more than once class at the same time.
// Interfaces can inherit from other interfaces. A class that inherits this interface must provide implementation for all interface members in the entire interface inheritance chain.
// We cannot create an instance of an interface, but an interface reference variable can point to a derived class object
// Interface Naming Convention: Interface names are prefixed with capital I


// Explicit interface implementation
// Question: A class inherits from 2 interfaces and both the interfaces have the same method name. How should the class implement the method for both the interfaces?
// We are using Explicit Interface Implementation technique to solve this problem.
// Note: When a class explicitly implements, an interface member, the interface member can no longer be accessed thru class reference variable, but only thru the interface reference variable.
// Access modifiers are not allowed on explicitly implemented interface members.

interface LabeledValue {
    label: string;
   }
    
   function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
   }
    
   let myObj = { size: 10, label: "Size 10 Object" };
   printLabel(myObj);
   
   function printLabel1(labeledObj: { label: string }) {
    console.log(labeledObj.label);
   }
    
   let myObj1 = { size: 10, label: "Size 10 Object" };
   printLabel1(myObj1);
   