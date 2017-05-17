//********************************************
//*****************Slider*********************
//********************************************
$(function(){
	//configuration
	var width = 720;
	var animationSpeed = 1000;
	var pause = 2000;
	var currentSlide = 1;

	//cache DOM
	var $slider = $('#slider');//searches html once
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');
	var interval;
		//set interval
		interval = setInterval(function(){
			$slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function(){//callback
				currentSlide++;
				if(currentSlide === $slides.length){
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
		}, pause);
	
	
	//animate margin
	//if its last slide go to position 1
});