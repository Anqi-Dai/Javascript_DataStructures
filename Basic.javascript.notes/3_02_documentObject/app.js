// The document object

let val;
val = document;
val = document.head;
val = document.body;
val = document.URL;
val = document.characterSet;
val = document.doctype;
val = document.domain;
val = document.contentType;
// the html collections (it's like an array but you can't use forEach)
val = document.all; // an "array" of all of the tags
val = document.all.length;

val = document.forms; // you can do this but it's not recommended
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList;
val = document.links;
// how to convert the html collections to a true array
let linksArr;

linksArr = Array.from(val);
linksArr.forEach(function(link) {
  // console.log(link);
});

console.log(val);
