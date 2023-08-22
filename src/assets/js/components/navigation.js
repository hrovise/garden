
let panel = document.getElementsByClassName('nav__link');
// search[0].addEventListener('click', (event)=>{
// kontakt[0].scrollIntoView({behavior: 'smooth'});
// })

let searcher;
let firma = document.querySelector('.firma');
let kontakt = document.querySelector('.kontakt');
let oferta = document.querySelector('.oferta');
let realization = document.querySelector('.realization');
const myRe = new RegExp("Oferta");

// console.log(oferta)
// let str = oferta.innerHTML.split('<');

for(let i=0;  i<panel.length; i++){
   let fry;
      if(panel[i].innerHTML.match(myRe)){
    fry = panel[i].innerHTML.match(myRe);
    if(fry[0]==='Oferta')
    panel[i].innerHTML=fry[0];
      }
    
switch(panel[i].innerHTML){
    case 'O firmie': panel[i].addEventListener('click',(event)=>{
        firma.scrollIntoView({behavior:'smooth'})
        
    }); break;
    case 'Kontakt': panel[i].addEventListener('click',(event)=>{
        kontakt.scrollIntoView({behavior:'smooth'})
        
    });break;
    case 'Oferta': panel[i].addEventListener('click',(event)=>{
        oferta.scrollIntoView({behavior:'smooth'})
        
    });break;
    case 'Realizacje': panel[i].addEventListener('click',(event)=>{
        realization.scrollIntoView({behavior:'smooth'})
        
    });break;
    default: console.log("some error")
}
}


