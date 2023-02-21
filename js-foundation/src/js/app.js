// // Html tagi secerek mudaxile etmek
// const word=document.querySelector("#demo");
// word.innerHTML="salam";
// // Obyektden miras almaq
// var person={
//     Name:"Ferid",
//     Surname:"Abishov",
//     age:20
// }
// var person1=new Object(person);
// console.log(person1);
// // Arrayden miras almaq
// var Arr=[1,2,3,4,5,];
// var Arr2=new Array(Arr);
// console.log(Arr2);

// //functiondan miras almaq inheritance
// function Alldata(name,surname,age){
//     this.name=name,
//     this.surname=surname,
//     this.age=age
// }
// var Person2=new Alldata("Orxan","Zeynalli",30);
// console.log(Person2);

// jsle functionla imagelerin propertilerin deyismek 

function Getcss(width,height,object_fit,border_radius){
    this.height=height,
    this.width=width,
    this.object_fit=object_fit,
    this.border_radius=border_radius
}

const sectiononeDesing=document.querySelectorAll("#section1 img"); 
console.log(sectiononeDesing)

var section1css= new Getcss(100,300,"cover",50 )

for(let index=0;index<sectiononeDesing.length;index++){
    const element=sectiononeDesing[index];
    element.style.width=section1css.width+"%";
    element.style.height=section1css.height+"px";
    element.style.objectFit=section1css.object_fit;
    element.style.borderRadius=section1css.border_radius+"px "

}