const student ={
    name:"Mina",
    age:22
}


for(const key in student) {
    console.log(key);

    console.log(student[key]);
}



console.log(Object.keys(student));
console.log(Object.values(student));