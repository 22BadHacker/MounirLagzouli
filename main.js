let btn = document.getElementById('btn');
let overlay = document.getElementById('overlay');


btn.addEventListener('click', () => {

    btn.classList.toggle('active');
    overlay.classList.toggle('open');
    
    

})

// function effect1() {

//     gsap.to(".overlay", 2, {
//         top: "0%",
//         ease: 'power4.inOut',
//         delay: .8,
//     });

//     gsap.from('.overlay .menu-item', 2, {
//         x: -200,
//         opacity: 0,
//         delay: 1.5,
//         ease: 'power4.inOut',
//         blur: '6px',
//         stagger:{
//             amount: 1
//         },

//     }, 0.2);

//     gsap.from(".sub-nav p", 2, {
//         y: '100',
//         delay: 1.7,
//         ease: 'power2.inOut',
//         // scale: 1,
//         opacity: 0,
//         stagger:{
//             amount: 2
//         },
//     });

// }

// effect1();

// gsap.reverse();




// btn2.addEventListener('click', () => {
//     gsap.to('.overlay', 2, {
//         opacity: 0,
//     })
// })



// document.addEventListener('DOMContentLoaded', () => {
//     let activeItemIndictor = CSSRulePlugin.getRule(".menu-item p#active::after");
//     const toggleButton = document.querySelector('.burger');
//     let isOpen = false;

//     gsap.set(".menu-item p", {y: 255});
//     const timeline = gsap.timeline({paused: true});

//     timeline.to('.overlay', {
//         duration: 1.5,
//         clipPath: 'polygon(0% 0%, 100% 0%, 1005 100%, 0% 100%)',
//         ease: " power4.inOut"
//     });
    
//     timeline.to(".menu-item p", {
//         duration: 1.5,
//         y: 0,
//         stagger: 0.2,
//         ease: "power4.out"

//     }, "-=1");

//     timeline.to(activeItemIndicator, {
//         width: '100%',
//         duration:1,
//         ease: "power4.out",
//         delay: 0.5
//     }, "<");

//     timeline.to('.sub-nav', {
//         bottom: "10%",
//         opacity:1,
//         duration: 0.5,
//         delay: 0.5
//     }, "<");

//     toggleButton.addEventListener("click", function() {
//         if(isOpen){
//             timeline.reverse();

//         }else{
//             timeline.play();
//         }

//         isOpen = !isOpen;
//     })
// })




// function startLoader() {
//     let counterElement = document.querySelector('.counter');
//     let currentValue = 0;

//     function updateCounter(){
//         if(currentValue === 100){
//             return;
//         }

//         currentValue += Math.floor(Math.random() * 10) + 1;

//         if(currentValue > 100) {
//             currentValue = 100;
//         }

//         counterElement.textContent = currentValue;

//         let delay = Math.floor(Math.random() * 200) + 50;

//         setTimeout(updateCounter, delay);
//     }

//     updateCounter();
// }

// startLoader();

// gsap.to('.counter', 0.25, {
//     delay: 3.2,
//     opacity: 0,
//     stagger: {
//         amount: 0.5
//     },
//     ease: "power4.inOut"
// });

// gsap.to('.bar', 1.5, {
//     delay: 3.5,
//     height: 0,
//     stagger: {
//         amount: 0.5
//     },
//     ease: "power4.inOut",
// });

// gsap.from('.h1', 1.5, {
//     delay: 4,
//     y: 700, 
//     stagger: {
//         amount: 1,

//     },
//     ease: "power4.inOut"
// })



// const arrowLeft = document.getElementById('arrowLeft'); 
// const arrowRight = document.getElementById('arrowRight'); 
// const move = document.getElementsByClassName('.pro')[]; 


// arrowLeft.addEventListener('click', () => {
//     move.scrollLeft -= 100;
// })





// function emailSend(){
    
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "2016booy@gmail.com",
//         Password : "5DC9983FA34EEF12DA9854BF5735C6E10CD7",
//         To : 'mounirlagzouli22@gmail.com',
//         From : "2016booy@gmail.com",
//         Subject : "This is the subject",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );

// }


// const eff = () => {

//     gsap.to(".letter", 2, {
//         delay: '3.5',
//         top: "0px",
//         ease: "power4.inOut",
//         stagger:{
//             amount: 0.9,
//         },
    
//     });
    
//     // gsap.to('.header', 2, {
//     //     scale: 2,
//     //     ease: "power4.inOut",
//     //     delay: 3,
//     //     // opacity: 0,
    
//     // } )
// }


// gsap.from(".logo", 2, {
//     delay: '2',
//     opacity: "0",
//     ease: "power4.inOut"
// })




// function startLoader() {
//     let counterElement = document.querySelector('.counter');
//     let currentValue = 0;

//     function updateCounter(){
//         if(currentValue === 100){
//             return;
//         }

//         currentValue += Math.floor(Math.random() * 10) + 1;

//         if(currentValue > 100) {
//             currentValue = 100;
//         }

//         counterElement.textContent = currentValue;

//         let delay = Math.floor(Math.random() * 200) + 50;

//         setTimeout(updateCounter, delay);
//     }

//     updateCounter();
// }

// startLoader();

// gsap.to('.counter', 0.25, {
//     delay: 3.2,
//     opacity: 0,
//     stagger: {
//         amount: 0.5
//     },
//     ease: "power4.inOut"
// });


// setTimeout(eff, 6000);
