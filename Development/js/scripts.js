// السؤال الأول
// 1 
const name = "اسمي موسى وعمري "
// 2
const age = 17
// 3 and 4
console.log(name + age)
// 5 and 6
console.log( age*5)
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني
// 1
let hobbies = ["الصيد" + " " + "السباحه" + " " + "التسلق" + " "];
// 2
hobbies.push = (16);

hobbies[4] = 16
console.log(hobbies);
console.log(hobbies.length);

// 3
hobbies.pop()
console.log(hobbies)
// 4
    let student = {
    path: "web programming",
    language: "CSS",
    }
// 5
student ["TAs"] = ["Nancy", "Moudhi", "Hussain", "Rahaf"];

console.log(student)
// 6
console.log(student.path)
// 7
console.log(student["TAs"][0])
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-
 
// البونص
// 1
student["sayHello"] = function() {console.log("مرحباً")}
console.log(student)
// 2
student["sayHello"]()
student["sayHello"]()
student["sayHello"]()
// console results => console.png
