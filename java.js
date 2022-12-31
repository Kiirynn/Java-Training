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
   const links = document.querySelectorAll('.links li');
   const nav = document.querySelector('nav');
   const burger = document.querySelector('.burger');

   burger.addEventListener('click', () => {
       nav.classList.toggle('nav-active');

     
       });

       links.forEach((link, index) => {
         link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 + 1.2 }s` ;
   });
}

navSlide();



// scroll to top button 


const topBtn = document.querySelector("#top");

topBtn.addEventListener('click', () => {
    window.scrollTo({top : 0, behavior :'smooth' }) ;

    topBtn();
});




// calculator 

const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('buttons'));

buttons.map( button => {
   button.addEventListener('click', (e) => {
      switch(e.target.innerText){
         
         case 'C' : 
             display.innerText = ''; 
            break;
         
         case '&larr;': 
         if(display.innerText){
              display.innerText = display.innerText.slice(0,-1); 
         }
           break;
        
         case '=' :
            try{
               display.innerText = eval(display.innerText); 
            } catch{
               display.innerText = 'error';
            }
            
            
          default: 
              display.innerText += e.target.innerText;      
         
         //  try()
        }
   })




   // blackjack game
 
})

// const cardLinks = [   // '/Users/k-man/Downloads/PNG-cards-1.3/3_of_clubs.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/3_of_diamonds.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/3_of_hearts.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/3_of_spades.png',

// // '/Users/k-man/Downloads/PNG-cards-1.3/4_of_clubs.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/4_of_diamonds.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/4_of_hearts.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/4_of_spades.png',

// // '/Users/k-man/Downloads/PNG-cards-1.3/5_of_clubs.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/5_of_diamonds.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/5_of_hearts.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/5_of_spades.png',

// // '/Users/k-man/Downloads/PNG-cards-1.3/6_of_clubs.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/6_of_diamonds.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/6_of_hearts.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/6_of_spades.png',

// // '/Users/k-man/Downloads/PNG-cards-1.3/7_of_clubs.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/7_of_diamonds.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/7_of_hearts.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/7_of_spades.png',

// // '/Users/k-man/Downloads/PNG-cards-1.3/8_of_clubs.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/8_of_diamonds.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/8_of_hearts.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/8_of_spades.png',

// // '/Users/k-man/Downloads/PNG-cards-1.3/9_of_clubs.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/9_of_diamonds.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/9_of_spades.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/9_of_spades.png',

// // '/Users/k-man/Downloads/PNG-cards-1.3/10_of_clubs.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/10_of_diamonds.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/10_of_hearts.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/10_of_spades.png',

// // '/Users/k-man/Downloads/PNG-cards-1.3/ace_of_clubs.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/ace_of_diamonds.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/ace_of_hearts.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/ace_of_spades2.png',

// // '/Users/k-man/Downloads/PNG-cards-1.3/jack_of_clubs2.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/jack_of_diamonds2.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/jack_of_hearts2.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/jack_of_spades2.png',

// // '/Users/k-man/Downloads/PNG-cards-1.3/king_of_clubs2.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/king_of_diamonds2.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/king_of_hearts2.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/king_of_spades2.png',

// // '/Users/k-man/Downloads/PNG-cards-1.3/queen_of_clubs2.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/queen_of_diamonds2.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/queen_of_hearts2.png',
// // '/Users/k-man/Downloads/PNG-cards-1.3/queen_of_spades2.png', 
// ]


const cards = [
   "A",2,3,4,5,6,7,8,9,10,"J","Q","K",
];



const suit = ["clubs", "diamond", "hearts", "spades"]

const newPlayerCard = [
   {cards:"A",
   value: 1,
   suit:"clubs",
   img: src='Cards/2_of_clubs.png'},
   
   {cards:"A",
   value: 1,
   suit:"diamonds",
   img: src='Cards/2_of_diamonds.png'},
   
   {cards:"A",
   value: 1,
   suit:"hearts",
   img: src='Cards/2_of_hearts.png'},
   
   {cards:"A",
   value: 1,
   suit:"spades",
   img: src='Cards/2_of_spades.png'},

]

let classCount = i = 0 ; i < 11 ; i++;
const pCountDisplay = document.getElementById('Pcount');
const dCountDisplay = document.getElementById('Dcount');
const dealerCont = document.querySelector(".card-containerD");
const playerCont = document.querySelector(".card-containerp");
const img = document.querySelector(`playerCard${classCount++}`);


const hitBtn = document.querySelector('#hit');
const stayBtn = document.querySelector('#stay');
const dealBtn = document.querySelector('#deal');



let currentCard = 0;
let pCount = 0;
let dCount = 0;


function getRandomCard() {
    return Math.floor(Math.random() * cards.length) ;
   
  }





  //deal button

dealBtn.addEventListener('click', () => {
  
// currentCard = [getRandomCard()];
    






//    function showCard(card) {
//       const item = deck[card];
//         playerCard.src = item.playerCard ;
//        };


  
//  showCard(currentCard);

});





// hit button
 hitBtn.addEventListener('click', () => {
   
   
   currentCard = [getRandomCard()];

   function npcFunc() {
      const newPlayerCard = document.createElement('img');
      newPlayerCard.classList.add(`playerCard${classCount++}`);
      playerCont.appendChild(newPlayerCard);
      
     
   };
   
   
      npcFunc(currentCard);
   
   
     function showCard(card) {
       const item = newPlayerCard[card];
         
           cards.textContent = item.cards;
           suit.textContent = item.suit;
           img.src = item.img;
          
        };

     
       showCard(currentCard);
       
      


      // switch(cards,suit){
      //    case "A","clubs": playerCard.display.src="Cards/ace_of_clubs.png"
      //    break;
         
      //    case "A","diamonds": playerCard.display.src="Cards/ace_of_diamonds.png"
      //    break;
         
      //    case "A","hearts": playerCard.display.src="Cards/ace_of_hearts.png"
      //    break;
         
      //    case "A","spades": playerCard.display.src="Cards/ace_of_spades2.png.png"
      //    break;
      //    }
  
    });
 


  


 

   

       
        

      
      
 
    

   

 



  

  

// about.addEventListener('click', (e) => {
//    const id = e.target.dataset.id ;

//    if(id){
//    tabBtns.forEach( (btn) => {
//        btn.classList.remove('active');


// const value = () => {
//    for(i = 0 ;  i < 21; i++)

// }
   



// for(i = 0 ; i < 52 ; i++){}


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














// Expense Tracker
const grid = document.querySelector('.grid');
const nameBar = document.getElementById('name');
const dateBar = document.getElementById('date');
const amountBar = document.getElementById('amount');
const addBtn = document.querySelector('#Add');
const nameOutcome = document.querySelector('#name-outcome');
const dateOutcome = document.querySelector('#date-outcome');
const priceOutcome = document.querySelector('#price-outcome');
// const sum = document.getElementById('total');
let classCount1 = i = 0 ; i < 11 ; i++;





function myFunction() {
  var table = document.getElementById("myTable");
   
     function updateSubTotal() {
  
       let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
          return total + parseFloat(row.cells[2].innerHTML);
        }, 0);
          document.getElementById("total").innerHTML = "$" + subTotal.toFixed(2);
      }
            updateSubTotal();
           
           var row = table.insertRow(1);
           var cell1 = row.insertCell(0);
           var cell2 = row.insertCell(0);
           var cell3 = row.insertCell(0);
 
    const removeBtn = document.createElement('button');
       removeBtn.innerHTML = "X" ;
          row.appendChild(removeBtn);
  
  
    removeBtn.addEventListener('click', () => {
      let sum = document.getElementById("total");
      cell3.innerHTML = nameBar.value = "";
      cell2.innerHTML = dateBar.value = "";
      cell1.innerHTML = amountBar.value = "";
      row.remove(1);
      


    
});

       cell3.innerHTML = nameBar.value;
       cell2.innerHTML = dateBar.value;
       cell1.innerHTML = amountBar.value;

       


};

// //  vowel counter
// // a, e, i, o, u

const displayMessage = document.getElementById('dMessage')
const checkBtn = document.querySelector('#checkBtn');
const textBar = document.querySelector('#counterInput');
let counter1 = 0 ;

function removeAfterSetTime() {
   location.reload()
}


   checkBtn.addEventListener('click', () => {
      let input = document.getElementById('counterInput').value.toLowerCase();
      let split = input.split('');
      textBar.value = ""



      for(let i = 0; i < split.length ; i++)
          if(split[i] == 'a' || split[i] == 'e' || split[i] == 'i'|| split[i] == 'o' || split[i] == 'u'){
             counter1++
      }
      if(counter1 > 1){
         displayMessage.innerHTML = `input has ${counter1} vowels`
         let gg = displayMessage.innerHTML;
        
           alert(gg);
      }

      else {
         displayMessage.innerHTML = `input has ${counter1} vowels`
         let gg2 = displayMessage.innerHTML ;
         
         alert(gg2);
      }
   
   })





   // memory game


const memImg = [
   
   {  id: 1,
      imgPhoto: src='Content/profile pic 2 spotift:apple.jpg'},
   
   {  id: 2,
      imgPhoto: src='Content/ETERNITY COVER FINAL EP2.jpeg'},
   
   {  id: 3,
      imgPhoto: src='Content/IG FACE PHOTO.jpeg'},
   
   {  id: 4,
      imgPhoto: src='Content/kii 3 flippped.jpeg'},
   
   {  id: 5,
      imgPhoto: src='Content/kii 4_11zon.jpeg'},
   
   {  id: 6,
      imgPhoto: src='Content/ETERNITY COVER FINAL EP2.jpeg'},
   
   ]

let currentDiv = 0;
let currentMemCard = 0;

const playGame = document.querySelector('#play-memGame')
const mainCont = document.querySelector('.mem-card-main-container')

// const memCard = Array.from(document.querySelector('.card'));
const memCard = 

`<div class="mem-card-container1">
 
<div class="card x 1">
<img id="mem-photo" src="" alt="">
</div>

<div class="card x 2">
<img id="mem-photo" src="" alt="">
</div>

<div class="card x 3">
<img id="mem-photo"  src="" alt="">
</div>
</div>

<div class="mem-card-container2">

<div class="card x 4">
<img id="mem-photo"  src="" alt="">
</div>

<div class="card x 5">
<img id="mem-photo" src="" alt="">
</div>

<div class="card x 6">
<img id="mem-photo"  src="" alt="">
</div>

</div>`;


playGame.addEventListener('click', () =>{
   mainCont.insertAdjacentHTML('beforeBegin', memCard)
     const divCard = document.querySelector('.card')
     const imgPhoto = document.getElementById('mem-photo');

   divCard.addEventListener('click', () => {
      const divX = document.querySelector('.x');
      currentMemCard = [getRandomCard()];
      
            
           
      
      function showMemCard(card) {
               
               const item = memImg[card];
                imgPhoto.src = item.imgPhoto;
                  
               };
               
                  showMemCard(currentMemCard);
            
               })
   
               
               
               
               function getRandomCard() {
                  return Math.floor(Math.random() * memImg.length) ;
               
               }
   
          
            
})











// note taker

const addNoteBtn = document.querySelector('#add-note');
const noteBar = document.querySelector('#noteBar');
const notes = document.querySelector('.notes');
const closeBtn = document.querySelector('.closeBtn')
const info = document.querySelector('.info');
// const noteContainer = document.querySelector('.note-container');

const ovOff = document.querySelector('.overlay').style.display = 'none';
let classCount2 = i = 0 ; i < 11 ; i++;


function turnOverLayOn() {
   document.querySelector('.overlay').style.display = 'none';
   
}

turnOverLayOn();



addNoteBtn.addEventListener('click', () =>{

   
   
   function createNote() {

     
      
    
    let i = 0;
      const noteBtn = document.createElement('button');
      const noteBtnX = document.createElement('button');
      const noteHeader = document.createElement('h5');
      const noteP = document.createElement('p');
      const note = document.createElement('div');
      note.classList.add('note');
      note.classList.add(`${classCount2++}`);
      noteBtn.innerHTML = "View Detail";
      noteBtnX.innerHTML = "X";
      noteBtnX.classList.add('noteBtnX');
      

      
      noteHeader.innerHTML = `Note ${classCount++}`;
      // noteContainer.appendChild(notes);
      note.appendChild(noteHeader);
      note.appendChild(noteP);
      note.appendChild(noteBtn);
      note.appendChild(noteBtnX);
      notes.appendChild(note);
     
      document.body.appendChild(notes);
      document.querySelector('.noteBtnX' + i)
        
       noteBtnX.addEventListener('click', () =>  {
         
       
         notes.removeChild(note);


       // document.querySelector('.note').style.display = 'none';
    });
 
   i++;
      

      noteP.textContent = noteBar.value;
      
      noteBtn.addEventListener('click', () => {
         
         function turnOverLayOn() {
            // overlay.classList.toggle('hidden')
            document.querySelector('.overlay').style.display = 'block';
            info.appendChild(noteP);
         }
   
         turnOverLayOn();
    

      });

    
   
     
   };

   
   createNote() ;

   

});











