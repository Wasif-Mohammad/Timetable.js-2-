var name = prompt("What is your name?");
var time = prompt("What is the current time in 24-hour format?");
time = parseInt(time);

if (time >= 8 && time < 11) {
    alert("Good morning, " + name + "!");
} else if (time >= 12 && time < 15) {
    alert("Good afternoon, " + name + "!");
} else if (time >= 15 && time < 18) {
    alert("Good evening, " + name + "!");
} else if ((time >= 18 && time <= 23) || (time >= 0 && time < 8)) {
    alert("Good night, " + name + "!");
} else {
    alert("Hello, " + name + "!");
}
