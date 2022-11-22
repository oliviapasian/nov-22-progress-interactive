/*
//Drag effect
var startX = 0;
var startY = 0;
var offsetX = 0;
var offsetY = 0;
var dragElement;
document.onmousedown = OnMouseDown;
document.onmouseup = OnMouseUp;

function OnMouseDown(event) {
    document.onmousemove = OnMouseMove;
    startX = event.clientX;
    startY = event.clientY;
    offsetX = document.getElementById('div1').offsetLeft;
    offsetY = document.getElementById('div1').offsetTop;
    dragElement = document.getElementById('div1');
}

function OnMouseMove(event) {
    dragElement.style.left = (offsetX + event.clientX - startX) + 'px';
    dragElement.style.top = (offsetY + event.clientY - startY) + 'px';
}

function OnMouseUp(event) {
    document.onmousemove = null;
    dragElement = null;
}
*/

//Filters
$(function() { 

  // Select Get Started button. When clicked, fade out overlay.
  $('.get-started').on('click',function() {
    $('.introduction').fadeOut();
  });

  // init Isotope by selecting the grid class and selecting the grid-item to be filtered
  let $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
  });

  // Filtering interaction with buttons
  $('.filter-button-group').on( 'click', 'button', function() { // When a filter button is clicked on...
    let filterValue = $(this).attr('data-filter'); // Get it's data-filter value
    // try console.log filterValue to see what gets displayed in the browser console
    $grid.isotope({ filter: filterValue }); // Pass the value to the isotope array object
  });

})

//Open About
$(".about-button").on("click", function() {
  $(".about-overlay, .about-content").addClass("active");
});

//Close About
$(".close, .about-overlay").on("click", function() {
  $(".about-overlay, .about-content").removeClass("active");
});


