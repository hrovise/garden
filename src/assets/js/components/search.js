let searchLense = document.getElementsByClassName('search');
let input=document.querySelector('.custom__input');


   
  
    searchLense[0].addEventListener('click',()=>{
       
      
        let input=document.querySelector('.custom__input');
      
        input.classList.add('active');
        input.focus();
        searchLense[0].style.display='none'
    })
    

input.addEventListener('focusout', ()=>{
  
        input.classList.remove('active')
       
        searchLense[0].style.display='block'
   
})