Example-
Script.js
var link = "http://www.steadyadvice.net/t.html?stack=hello&pop=data&link=hello";
var extractParameter= new URL(link);
var final = extractParameter.searchParams.get("link");
console.log(final);

// you can get the current link by using window.location.href replace link variable string with this method.

// Another way is by using the split method-
var urlLink = 'http://www.steadyadvice.net/t.html?stack=hello&pop=data&link=hello';
var query_paramter = urlLink.split("?")[1];
console.log(query_paramter);

// The third is by using the regular expression-
Example-
function getUrlVars( name, link ) {
if (!link) link = location.href;
name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
var regexS = "[\\?&]"+name+"=([^&#]*)";
var regex = new RegExp( regexS );
var results = regex.exec( url );
return results == null ? 'Empty' : results[1];
}

console.log(getUrlVars('text', 'steadyadvice.net/?a=11&txt=world'));

// In this, I also handled that if at some instance parameter is missing then it returns undefined which is a bad coding practice. so to correct this we first check that particular parameter is present or not. if not present then send some default value.

// So there are some characters that can not pass through URL like suppose we write a space in the link and press enter key then space will be replaced by %20code. so it is also important to encode and decode the URL parameters. There are the following functions you can use to do this. In these functions, you have to pass the URL string.
// To decode use decodeURI(urlValue) and to encode use encodeURI(urlValue)