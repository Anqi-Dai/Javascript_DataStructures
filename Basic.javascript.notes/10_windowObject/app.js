// Window object

console.log(window);

// Alert Confirm and Prompt
alert("Hi this is a test to alert.");

confirm("Are you sure?");

const input = prompt();
console.log(input);

// Window properties

let val;
val = window.outerHeight;
val = window.outerWidth;

// inner height and width are the area of the html body basicallly, so not including the javascript console.
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
// gonna be helpful when you scroll to a certain point and then animation begins
val = window.scrollX;
val = window.scrollY; //There is no scroll bar so the positions are both 0.

// Location object
val = location.host;
val = location.pathname;
val = location.href;
val = location.origin;

// rRedirect and reload
window.location.href = "http://google.com";
// window.location.reload();

// History object

val = window.history.length;
window.history.go(-1);

// Navigator object
val = window.navigator;
val = window.navigator.vendor;
val = window.navigator.appName;
val = window.navigator.appCodeName;
val = window.navigator.appVersion;
val = window.navigator.platform; // for example you can order the app to do something on mac and do something else on windows
val = window.navigator.language;
console.log(val);
