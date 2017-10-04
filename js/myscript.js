var navbar = document.getElementById("sticky");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function smoothScroll(href) {
	$('html, body').animate({
		scrollTop: $(href).offset().top-80
	}, 500);
}


$(function () {
	
	'use strict';
	
	var navscroll = function () {
		
		var activeNav = "";
		
		$('[scrollto]').each(function () {
			var id = $(this).attr('href'),
				offset = $(id).offset();
			
			if(window.scrollY >= offset.top - 80) {
				activeNav = id;
			}
		});
		
		$('[scrollto]').removeClass('active');
		$('[scrollto]').each(function () {
			if(activeNav == $(this).attr('href')) {
				$(this).addClass('active');
			}
		});
		
	};
	
	$(window).on('scroll', function() {
		myFunction();
		navscroll();
	});
	
	$('[scrollto]').click(function (e) {
		e.preventDefault();
		
		var href = $(this).attr('href');
		smoothScroll(href);
	});
	
	$('a[href^="#"]').click(function (e) {
		e.preventDefault();
		smoothScroll($(this).attr('href'));
	});
	
	var modal = document.getElementById('myModal');
	var modalImg = document.getElementById("img01");
	
	$('.gallery-img').click(function () {
    	modal.style.display = "block";
    	modalImg.src = $(this).attr('image-src');
	});

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() { 
	  modal.style.display = "none";
	}
	
	
	
});