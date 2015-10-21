/*function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}   
ready();  */

$(document).ready(function() {

$("#dachshund").on('click', function() {
	$(".hide1").toggleClass("reveal1"); 
});
    
$("#cavalier").on('click', function() {
	$(".hide2").toggleClass("reveal2");
});
    
$("#bombay").on('click', function() {
    $(".hide3").toggleClass("reveal3"); 
});
     
});//closes ready





