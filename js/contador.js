document.addEventListener('DOMContentLoaded', () => {

    var flipdown = new FlipDown(1696561200,{
      headings:["Dias", "Horas", "Minutos", "Segundos"]})
  
      // Start the countdown
      flipdown.start()
  
      // Do something when the countdown ends
      flipdown.ifEnded(() => {
        document.querySelector("#flipdown").innerHTML = '';
        document.querySelector(".arrow").innerHTML = '';
         document.querySelector("#video").innerHTML = 
         `<video height="180px" width="320px" controls=1 style="margin-top:-55px; margin-bottom:-20px;">
           <source src="images/joey1.mp4" type="video/mp4">
         </video>`;
      })})