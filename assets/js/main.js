let mybutton = document.getElementById("back-to-top-btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    if (
      document.body.scrollBottom == 0 ||
      document.documentElement.scrollBottom == 0
      ){
        mybutton.style.display = "none";
    } else{
      mybutton.style.display = "block";
    }
    
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// $('.navbar-nav>li>a').on('click', function(){
  
//   //$('.navbar-collapse').collapse('hide');
// });