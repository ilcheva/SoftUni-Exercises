function solve() {
   let tr = document.getElementsByTagName("tr");
   let lastClicked;

   Array.from(tr).slice(1).forEach(row =>{
      console.log(row);
      
      row.addEventListener('click', e => {
         let element = e.target.parentNode.style;
         if (element.backgoundColor = '' || element.backgoundColor == undefined) {
            element.backgoundColor = "#412f5e";

            if (lastClicked) {
               lastClicked.backgoundColor = '';
            }
         } else {
            element.backgoundColor = '';
         }
         lastClicked = element;
      });


   });
}
