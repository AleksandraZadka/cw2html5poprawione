/**
 * @author Alex
 */

var main = function(){
	
	$('.dropdown-toggle').click(function(){
		
		$('.dropdown-menu').toggle();
	});

	$('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
    }
    
    currentSlide.slideUp(200).removeClass('active-slide');
    nextSlide.slideDown(200).addClass('active-slide');

  });
  
  $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    
    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      
    }
    
    currentSlide.slideUp(200).removeClass('active-slide');
    prevSlide.slideDown(200).addClass('active-slide');

      });
  	};


$(document).ready(main);
