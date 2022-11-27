// let navBar = document.createElement('nav');
// document.body.appendChild(navBar) ;
// navBar.classList.add("bar_gang") ;
// let navHeader = ["G1", "G2", "G3", "G4"];
// navBar.getElementsById("GDK").appendChild(navHeader);



// navHeader.forEach(myFunction) ;
// function myFunction(mul) { 
// let links = document.createElement("a") ; 
// links.innerHTML = mul ;
// document.body.appendChild(links) ;
// links.id = "GDK" ;
// } ;

// navBar.appendChild(navHeader) ;
// navHeader.classList.add("barContent") ;

// function for creating a bunch of the same elements
// myArray.foreach(newFunction) ;
// function newFunction(loop) {
//     let b = document.createElement("a")
//     b.innerHTML = loop ;
//     document.body.appendChild(loop); 
// } ;


// let bonehead = document.createElement("div") ;
// bonehead.classList.add("BDK") ;
// let myArray ;


// bonehead.innerHTML = `
// <a class= "GDK">G1</a>
// <a class= "GDK">G2</a>
// <a class= "GDK">G3</a>
// <a class= "GDK">G4</a>` ;

// document.body.appendChild(bonehead) ;





// let myElement = document.createElement('div') ;
// let header = document.createElement('h1') ;
// let para1 = document.createElement('p') ;
// const img1 = document.createElement("img"); 
// img1.src = "Content/ETERNITY COVER FINAL EP2.jpeg";
// let myInfo = document.createElement('div') ;
// myInfo.classList.add("dork") ; 

// document.body.appendChild(myElement) ;
// myElement.classList.add("div1") ;

// myElement.appendChild(header) ;
// myElement.appendChild(img1) ;
// document.body.appendChild(myInfo) ;
// header.innerText = 'is this gonna fuckin work' ;
// header.classList.add("h1") ;


// myInfo.innerHTML = `
// <p class="gang">you feel me on some real  real gang shit</p> 
// <p class="gang">little bit of gang shit but not too much</p>
// <p class="gang">gang gang never lame shit  really out here fuckin gettin man you see me gang</p>`




// let bArea = document.createElement("div") ;
// document.body.appendChild(bArea) ;
// const myButton = document.createElement('button') ;
// bArea.appendChild(myButton) ;
// myButton.innerText = 'can you click me';
// myButton.id = "big";
// myButton.addEventListener('click', ) ;


// function bgChange() {
//     let bgCol = 'rgb (' + random(255) + ',' + random(255) + ',' + random(255) + ')' ;
//     document.body.style.backgroundColor = bgCol ;
// }

// myButton.onclick = bgChange ;





// const background = document.getElementById("background");

// const getRandomNumber = (limit) => {
//     return Math.floor(Math.random() * limit) ; 
// } ;

// const getRandomColor = () => {
//     const h = getRandomNumber(360) ;
//     const s = getRandomNumber(100) ;
//     const l = getRandomNumber(100) ;

//     return `hsl(${h}deg, ${s}%, ${l}%)`;
// } ;

// const setBackgroundColor = () => {
//     const randomColor = getRandomColor();
//     background.style.backgroundColor = randomColor;
//     background.style.color = randomColor;
//   };


// setBackgroundColor() ;

// setInterval(() => {
//     setBackgroundColor();
// }, 1500);

// const hex = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F",] ;
// const btn = document.getElementById('btn') ;
// const color = document.querySelector('.color') ;

// btn.addEventListener('click', function(){
//     let hexColor = '#' ;
//     for(let i = 0; i < 6 ; i++){
//     hexColor += hex[getRandomNumber()] ;
// }

//     color.textContent = hexColor;
//     document.body.style.backgroundColor = hexColor;
// });

// function getRandomNumber() {
// return Math.floor(Math.random() * hex.length)  ;

// } ;
// function getRandomNumber(){
//     return Math.random()
//     
// } 








// const numbers = [0,1,2,3,4,5,6,7,];
// const btn = document.getElementById("gd");
// let para = document.getElementById("tagss")

// btn.addEventListener('click', function (){
//     let answer = "#" ;
    
//     for(let i = 0; i < 7 ; i++){
//      answer += numbers[getRandomNumber()]
//     }
    
//     answer.textContent = para ;
   
// });

// function getRandomNumber(){
//     return Math.floor(Math.random() * numbers.length) ;
// } ;

// const hex = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F",] ;
// const btn = document.getElementById("gd") ;
// const color = document.querySelector(".gg") ;


// btn.addEventListener('click', function() {
//     let hexColor = "#" ;
//     for(let i = 0 ; i < 6; i++){
//         hexColor += hex[getRandomNumber()];
//     }
//     color.textContent = hexColor ;
//     document.body.style.backgroundColor = hexColor ;
// })




// function getRandomNumber() {
// return Math.floor(Math.random() * hex.length);

// } ;



// const btn2 = document.getElementById("gd2");
// let Animal = "snake";

// btn2.addEventListener('click', function(){
//     switch(Animal){
//         case "rhino" :
//             console.log("that is a rhino");
//             break;
//         case "giraffe":
//             console.log("that is a giraffe");
//             break;
//         case "reptile":
//             console.log("that is a reptile");
//             break;
//         case "lizard" :
//             console.log("that is a lizard");
//             break;
//         default:
//             document.body.style.backgroundColor =  'rgb(155 , 70, 145)';
//             console.log("that is not represented animal")
           
//          }
           
// }) ;

// combine a switch statement with a function 









// let count = 0;

// const value = document.querySelector('#value');
// const btns = document.querySelectorAll('.btn');

// btns.forEach(function (btn) {
//  btn.addEventListener('click', function (e){
//     const styles = e.currentTarget.classList;
    
//     if(styles.contains('decrease')){
//         count--;
//     }
//     else if (styles.contains("increase")){
//         count++;
//     }
//     else {
//         count = 0 ;
//     }
//     if(count > 0){
//         value.style.color = "green"
//     }
//     if(count < 0){
//         value.style.color = "red"
//     }
//     if(count === 0){
//         value.style.color = "yellow"
//     }
//     value.textContent = count;
//     });
// });







// local reviews data
// const reviews = [
//   { id:1,
//     name: 'gang 1',
//     job: "web developer",
//     img:  src="Content/IG FACE PHOTO.jpeg",
//     text: "ok i see you gang 1",
//   },
//   { id:2,
//     name: 'gang 2',
//     job: "UI Designer",
//     img: src="Content/kii 3 flippped.jpeg",
//     text: "ok i see you gang 2",
//   },
//   { id:3,
//     name: 'gang 3',
//     job: "gang member",
//     img: src="Content/kii 4_11zon.jpeg",
//     text: "roger that gang 3",
//   },
// ];

// // select items
// const img = document.getElementById('photo');
// const author = document.getElementById('author');
// const job = document.getElementById('job');
// const info = document.getElementById('info');

// // buttons
// const prevBtn = document.querySelector('.prev-btn');
// const forBtn = document.querySelector('.for-btn');
// const ranBtn = document.querySelector('.random-btn');

// // load starting item
// let currentItem = 3;




// // load initial item

// window.addEventListener('DOMContentLoaded', function (){
//  showPerson(currentItem);
// });

// // show person
// function showPerson(person) {
// const item = reviews[person];
//    img.src = item.img ;
//    author.textContent = item.name ;
//    job.textContent = item.job;
//    info.textContent = item.text;
// }

// // show next person 

// forBtn.addEventListener('click', function () {
//     currentItem++;
//        if(currentItem > reviews.length -1){
//         currentItem = 0;
//      }
//     showPerson(currentItem);
// });

// //prev person
// prevBtn.addEventListener('click', function () {
//     currentItem--;
//        if(currentItem < 0) {
//          currentItem = reviews.length - 1;
//        } 
//     showPerson(currentItem);
// });

// // carry on trying to figure out how to make random button work

// ranBtn.addEventListener('click', function() {
//     currentItem = Math.floor(Math.random() * reviews.length);
    

//       showPerson(currentItem);
// });


// const navToggle = document.querySelector('.nav-toggle');
// const links = document.querySelector('.links')

// navToggle.addEventListener('click', function (){
//     // console.log(navToggle.classList);
//     if(links.classList.contains('show-links')){
//         links.classList.remove('show-links');
//     }
//     else {
//         links.classList.add('show-links');
//     }

// })

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');
     //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
       
       //animate links
        links.forEach((link, index) => {
            if(link.style.animation){
             link.style.animation = '';
             }
             else {
                 link.style.animation =  `navLinkFade .3s ease forwards ${index / 7 + 0.5}s`;
             }
         });

         //burger animation
         burger.classList.toggle('toggle');
        
    });


};

navSlide();