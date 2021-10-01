
AOS.init({
    duration: 1000,
  });

function toggle_list(){

    
    var navlinks=document.getElementById("nav-links");
    
    navlinks.classList.toggle("show-links");
    var button=document.getElementById("cta-button");
    button.classList="button-mobile";
}