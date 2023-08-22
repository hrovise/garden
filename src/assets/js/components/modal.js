// let modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption


// let img = document.getElementsByClassName("layout__img");
// console.log('img',img)
// let modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// let indexOfImage=-1;
// for(let i=0; i<img.length;i++){
// img[i].onclick = function(){
//     console.log('img clicked');
//   modal.style.display = "block";
//   indexOfImage=i;
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }
// }
  

// var span = document.getElementsByClassName("close")[0];


// span.onclick = function() {
//   modal.style.display = "none";
// }

// let collection = document.getElementsByClassName('layout__img');
// console.log(collection)
// let next_modal = document.querySelector('.next__modal');
// let prev_modal = document.querySelector('.prev__modal');

// let itemIndex=1;
// showCollection(itemIndex);
// function showCollection(n){
// if(n>collection.length) {
//     itemIndex=1;
// }
// if(n<1) {
//     itemIndex=collection.length;
//     console.log("condition", itemIndex)
// }
// for(let i=0;i<collection.length;i++){
//     //collection[i].style.display='none';
// }
// collection[itemIndex-1].style.display='inline-block';
// console.log(collection[itemIndex-1])
// }
// let newSrcCollection=[];
// // function transformSrc(){
  
// //   for(let i=0; i<img.length;i++){
// //     newSrcCollection[i]= img[i].src;
// //     console.log(newSrcCollection)
// //   } 
// // }
// function plusCollectionItem(n){
  
//     console.log(indexOfImage);
//     if(n>0){
//       indexOfImage++;
//     if(indexOfImage<=img.length-1){
     
      
//       modalImg.src=img[indexOfImage].src;
//       return;
//     }
//     if(indexOfImage==img.length){
//       indexOfImage=0;
//       modalImg.src=img[indexOfImage].src;
//       return;
//     }
   
//     } else if(n<0){
//     if (indexOfImage==0){
//       indexOfImage=img.length-1;
//       modalImg.src=img[indexOfImage].src;
//       return;
//     } 
//    else if(indexOfImage==img.length){
//       indexOfImage--;
//       modalImg.src=img[indexOfImage].src;
//       return;
//     }
//     else {
//       indexOfImage--;
//       modalImg.src=img[indexOfImage].src;
//       return;
//     }
//   }

//     // console.log(newSrcCollection)
//     //showCollection(itemIndex+=n);


// }
// console.log(prev_modal);
// prev_modal.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log(prev_modal)
//     plusCollectionItem(-1);
   
//  }, true)
// next_modal.addEventListener('click', function(event){
//     event.stopPropagation();
//     console.log('kj')
//    plusCollectionItem(1);
// }, true)

