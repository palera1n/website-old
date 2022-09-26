$( ".window" ).draggable({ handle: ".window-titlebar" }).resizable();

$('html').bind('mousedown', function() {
  $('.window').addClass('deactive');
});

$('.window').bind('mousedown', function(event){
  event.stopPropagation();
  $(this).removeClass('deactive');
});

//bind the close button to the close function
$ ( ".window-close" ).click(function() {
    $(this).parent().parent().parent().hide();
});
function openFaq() {
    var faq = document.getElementById("faq");
    // remove the display none from the faq
    faq.style.display = "block";
}