const maxNum=prompt("enter a number:");
const randonNum=Math.floor(Math.random()* maxNum)+1;

let guss=parseInt(prompt("guss a number:"))
let i=1;


while(guss !== randonNum){
    if(guss < randonNum){
        guss=parseInt(prompt("the number is grater:"))
    }else{
        guss=parseInt(prompt("the number us less:"))
    }
    i++;
}
alert(`braaavoooo ${guss} true`)