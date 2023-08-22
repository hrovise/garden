
let modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption


let img = document.getElementsByClassName("layout__img");

let modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
let indexOfImage=-1;

  

var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
  modal.style.display = "none";
}

let collection = document.getElementsByClassName('layout__img');

let next_modal = document.querySelector('.next__modal');
let prev_modal = document.querySelector('.prev__modal');

let itemIndex=1;
showCollection(itemIndex);
function showCollection(n){
if(n>collection.length) {
    itemIndex=1;
}
if(n<1) {
    itemIndex=collection.length;
    
}
for(let i=0;i<collection.length;i++){
    //collection[i].style.display='none';
}
collection[itemIndex-1].style.display='inline-block';
console.log(collection[itemIndex-1])}
let newSrcCollection=[];

function plusCollectionItem(n){
 
    if(n>0){
      indexOfImage++;
    if(indexOfImage<=img.length-1){
     
      
      modalImg.src=img[indexOfImage].src;
      return;
    }
    if(indexOfImage==img.length){
      indexOfImage=0;
      modalImg.src=img[indexOfImage].src;
      return;
    }
   
    } else if(n<0){
    if (indexOfImage==0){
      indexOfImage=img.length-1;
      modalImg.src=img[indexOfImage].src;
      return;
    } 
   else if(indexOfImage==img.length){
      indexOfImage--;
      modalImg.src=img[indexOfImage].src;
      return;
    }
    else {
      indexOfImage--;
      modalImg.src=img[indexOfImage].src;
      return;
    }
  }

    // console.log(newSrcCollection)
    //showCollection(itemIndex+=n);


}

prev_modal.addEventListener('click', function(event){
    event.preventDefault();
    
    plusCollectionItem(-1);
   
 }, true)
next_modal.addEventListener('click', function(event){
    event.stopPropagation();
    
   plusCollectionItem(1);
}, true)

/*//modal*/





let indexExpand=0;
function waitExpand(){

let rotationbtn = document.querySelector('.btn__arrow')
let expandBtn = document.querySelector('.realiz__btn');
let gridHidden = document.getElementsByClassName('default--state')



expandBtn.addEventListener('click',()=>{
   
    

// gridHidden.classList.remove('default--state');
    for(let i=0; i<gridHidden.length;i++){
        
        
        if(gridHidden[i].classList.contains('active__toggle'))
         gridHidden[i].classList.remove('active__toggle');
        else
        gridHidden[i].classList.add('active__toggle');
      
        // if(gridHidden[i].classList.contains('default--state'))
        // gridHidden[i].classList.remove('default--state');

        // else gridHidden[i].classList.add('default--state')

    //     console.log(gridHidden[i].style)
    //     if(gridHidden[i].style.display!="block")
    //     gridHidden[i].style.display="block";
    // else
    //  gridHidden[i].style.display="none"
    
    }
    let str='';
   if(indexExpand%2==0){
    str = 'even'
   } else str='odd'
    let grid = document.querySelector('.grid');
    if(indexExpand==0||str=='even'){
        grid.classList.add('grid--new');
        rotationbtn.style.transform='rotate(180deg)';
          for(let i=0; i<img.length;i++){
            img[i].onclick = function(){
               
              modal.style.display = "block";
              indexOfImage=i;
              modalImg.src = this.src;
              captionText.innerHTML = this.alt;
             
            }
           
            }
     } else{
    

     rotationbtn.style.transform='rotate(360deg)';  
     grid.classList.remove('grid--new');
     
     
     for(let i=0; i<img.length;i++){
       // console.log('atrr',img[i])
       // if(img[i].onclick)
        img[i].onclick=function(){return null};
     } 
     }
     indexExpand++;


    let msnry = new Masonry(grid,{
  itemSelector: '.grid-item',
  gutter: 30,
  columnWidth:15,
  horizontalOrder: true,
  originLeft:true,
  originTop: true,
    });
   
    msnry.layout();
  
})
}