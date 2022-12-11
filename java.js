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

// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.links');
//     const links = document.querySelectorAll('.links li');
//      //toggle nav
//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
       
//        //animate links
//         links.forEach((link, index) => {
//             if(link.style.animation){
//              link.style.animation = '';
//              }
//              else {
//                  link.style.animation = `navLinkFade .3s ease forwards ${index / 7 + 0.5}s`;
//              }
//          });

//          //burger animation
//          burger.classList.toggle('toggle');
        
//     });


// };

// navSlide();



// const btns = document.querySelectorAll('.tab-btn');
// const about = document.querySelectorAll('.about');
// const articles = document.querySelectorAll('.content');

// about.addEventListener('click', function(e) {
//    const id = e.target.dataset.id;
//    if(id){
//       btns.forEach(function(btn){
//         btn.classList.remove('active');
//         e.target.classList.add('active');
//       });
//       articles.forEach(function(article){
//         article.classList.remove('active')
//       });
//       const element = document.getElementById(id);
//       element.classList.add('active');
//    }
// })


// const anon = (something1 = 'pussy', something2 = 'money') => {
//       console.log(`dont be a ${something1} with ${something2}`)
// };

// anon();


// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//    let total = 0;

//    for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
// }
// return total;
// };


// console.log(bill([10, 15, 30], 0.2 ));

// const ul = document.querySelector('people');

// const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// let html = ``;

// people.forEach(person => {

//     html += `<li style="color: purple">${person}</li>`;
// });

// console.log(html);
// ul.html = html ;






// const footer = document.createElement('footer');
// const ulList = document.createElement('ul');
// const liList = document.createElement('li');
// const aTags = document.createElement('a');
// const nextBtn = document.createElement('button');
// const prevBtn = document.createElement('button');
// const aElementBtn = document.createElement('button');
// const Btns = document.querySelectorAll('Btn');
// const content = document.querySelector('.content');

// let currentItem = 0;

// aTags.href = "www.google.com";

// document.body.appendChild(footer);

// footer.id = 'footer';
// nextBtn.id = 'next Btn';
// prevBtn.id = 'prev Btn';
// aElementBtn.id = 'aElement Btn';

// footer.appendChild(ulList);
// ulList.appendChild(liList);
// ulList.appendChild(nextBtn);
// ulList.appendChild(prevBtn);
// ulList.appendChild(aElementBtn);
// liList.appendChild(aTags);

// prevBtn.innerHTML = 'Prev';
// nextBtn.innerHTML = 'Next';
// aElementBtn.innerHTML = 'Create A';

// const about = document.querySelector('.about');
// const btns = document.querySelectorAll('.tab-btn');
// const content = document.querySelectorAll('.content');

// about.addEventListener('click', (e) => {
//     const id = e.target.dataset.id;
    
    
//     if(id){
//          btns.forEach(function (btn){
//             btn.classList.remove('active')

            
//         });
//         e.target.classList.add('active')
        

//         content.forEach(function (contents){
            
//             contents.classList.remove('active');
    
           
        
//         });
   
        
    
//      const element = document.getElementById(id);

//     element.classList.add('active');

// }
// }) ;


const counter = document.querySelector('#counter');
const btns = document.querySelectorAll('.btn');
let count = 0;


btns.forEach(function (btn){

    btn.addEventListener('click', (e) => {
         const styles = e.currentTarget.classList;

         if(styles.contains('decrease')){
            count--;
         }

         else if(styles.contains('increase')){
            count++;
         }

         else {
            count = 0
         }

         if (count > 0){
            counter.style.color = "green"
         }

         if (count < 0){
            counter.style.color = "red"
         }

         if (count === 0){
            counter.style.color = "yellow"
         }

         counter.innerText = count;
    });
    
})


const hex = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F",];
const color = document.querySelector('.color');
const btn = document.querySelector('.ranBtn')


btn.addEventListener('click', () => {
    let hexColor = '#';
    for(i = 0 ; i < 6 ; i++){
        hexColor += hex[getRandomNumber()];
    }
    

   
   
    document.body.style.backgroundColor = hexColor ;
    color.innerText = hexColor;

});

function getRandomNumber(){
  return  Math.floor(Math.random() * hex.length);
};






// about section

const articles = document.querySelectorAll('.content');
const tabBtns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');


about.addEventListener('click', (e) => {
    const id = e.target.dataset.id ;

    if(id){
    tabBtns.forEach( (btn) => {
        btn.classList.remove('active');

        
    });
    e.target.classList.add('active');

       articles.forEach((article) =>  {
        article.classList.remove('active');

        
       });
       const element = document.getElementById(id);
       element.classList.add('active');
      }
   });







// photos gallary

const images = document.querySelector('.about-img');
const photos = document.querySelectorAll('.photo-container');
const tabBtns2 = document.querySelectorAll('.tab-btn2');


images.addEventListener('click', (e) => {
   const id = e.target.dataset.id;

   if(id){
      tabBtns2.forEach((tabBtn2) => {
           tabBtn2.classList.remove('active');
      });
      e.target.classList.add('active');

    photos.forEach((photo) => {
      photo.classList.remove('active');
      });

   const element = document.getElementById(id);
   element.classList.add('active');
   }

});


// navbar



const navSlide = () => {

const nav = document.querySelector('nav');
   const burger = document.querySelector('.burger');
   const links = document.querySelectorAll('.links');
   const navLinks = document.querySelectorAll('.links li')

   burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
     

      navLinks.forEach((link, index) => {
         link.style.animation = `navLinkFade 0.5s ease forwards ${index /7}s`
      })

   })
}

navSlide()



// scroll to top button 


const topBtn = document.querySelector("#top");

topBtn.addEventListener('click', () => {
    window.scrollTo({top : 0, behavior :'smooth' }) ;

    topBtn();
});


