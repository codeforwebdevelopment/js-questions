let a = “false”;
function strToBool(s)
{
let regex=/^\s*(true|1|on)\s*$/i
 return regex.test(s);
}
console.log(strToBool(a))
Output-
false

let isValueAvailable = ‘false’;
var isChecked= (isValueAvailable == ‘true’); 
console.log(isChecked);  // false

In this case, if it is already boolean
console.log((‘’ + isValueAvailable) === “true”);
Output-
false

console.log(JSON.parse(“False”.toLowerCase()));
Output-
false

convertData(str){
    let value = str.toLowerCase().trim();
   switch(value){
    case “false”: case “no”: case “0”: case null: return false;
    case “true”: case “yes”: case “1”: return true;
    default: return Boolean(str);
    }
   }
   console.log(this.convertData(‘yes’));
   Output-
   true
   console.log(this.convertData(‘true’)); // true

   let a = “false”;
   if (String(a) == “true”)
   // It goes:
   String(true) == “true” //returns true
   String(false) == “true” //returns false
   String(“true”) == “true” //returns true
   String(“false”) == “true” //returns false
   console.log((String(a) == “true”)) // false

   let regex=/^\s*(true|1|on)\s*$/i
let regex=(/true/i)