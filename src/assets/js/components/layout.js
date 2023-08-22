
window.onload=()=>{
let userAgentString = navigator.userAgent;

let firefox = (userAgentString.indexOf("Mozilla")>-1)?true:false ;
const browser = function getBrowserType() {
  

}()


    

    let grid = document.querySelector('.grid');
    
        let msnry = new Masonry(grid,{
      itemSelector: '.grid-item',
      gutter: 30,
      columnWidth:15,
      horizontalOrder: true,
      originLeft:true,
      originTop: true,
        });
       
        msnry.layout();
        waitExpand();
    
   }