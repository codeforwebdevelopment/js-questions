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
   