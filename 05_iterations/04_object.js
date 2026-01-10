const myobj = {
    js : "JavaScript",
    cpp : "c++",
    rb : "ruby",
    swift : "Swift by apple"
}

for (const key in myobj) {
    // console.log(`${key} shortcut is for ${myobj[key]}`);
}

const language = ["js", "rb", "py", "java", "cpp"];
for (const key in language) {    
    // console.log(language[key]);
}

const map = new Map();
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France");

for (const Key in map) {
    console.log(Key);
        
}