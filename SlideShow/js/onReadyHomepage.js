function docReady(){
		var $nav = $('.nav');
	    var $img = $('img');
		var currentPosition = 0;
		var currentPositionHeader = 0;
		var picIndex = document.getElementById("pictureIndex");
		picIndex.innerHTML = currentPosition + 1; 
		var slideWidth = 600;
		var slidesHeader = $('.slideHeader');
		var numberOfSlidesHeader = slidesHeader.length;
		var slides = $('.slide');
		var numberOfSlides = slides.length;
		document.getElementById("all").innerHTML = numberOfSlides;
		var slideShowInterval;
		var speed = 1000;
		var count = 0;
		var image = $('.slide img');
		slides.wrapAll('<div id="slidesHolder"></div>');
		$('#slidesHolder').css('width', slideWidth * numberOfSlides);
		manageNav(currentPosition);
		slideShowInterval = setInterval(changePosition, speed);
		$nav.on('click', function() {			
			//determine new position
			currentPosition = ($(this).attr('id') == 'rightNav')
			? currentPosition+1 : currentPosition-1;
			var index = document.getElementById("pictureIndex");					
			//hide/show controls
			manageNav(currentPosition);
			clearInterval(slideShowInterval);
			slideShowInterval = setInterval(changePosition, speed);
			moveSlide(slideWidth, currentPosition);
			console.log('end of nav function');
		});
		
		$img.on('click', function(){
			//console.log($(this));
				var path = traverseData('path', $(this));
				window.location.assign("picturePage.html?name ="+path.name);

		});
		$('.slide img').on('mouseover',function(){
			clearInterval(slideShowInterval);
			$(this).addClass("over-pic");
			//$('#slidesHolder').stop();
		
			
		});
		$('.slide img').on('mouseout',function(){
			$(this).removeClass("over-pic");
			slideShowInterval = setInterval(changePosition, speed);
			//$('#slidesHolder').stop();
		
			
		});
		
		function changePosition() {
			if(currentPosition == (numberOfSlides-1)) {
				currentPosition = 0;
				manageNav(currentPosition);
			} else {
				currentPosition++;
				manageNav(currentPosition);
			};
			moveSlide(slideWidth, currentPosition);
		};
		function moveSlide(slideWidth,currentPosition) {
			$('#slidesHolder')
			  .animate({'marginLeft' : -slideWidth*(currentPosition)}, 100);
			   picIndex.innerHTML= currentPosition + 1 ; 
			};		
		function manageNav(position) {
			//hide left arrow if position is first slide
			if(position==0){ $('#leftNav').hide() }
			else { $('#leftNav').show() }
			//hide right arrow is slide position is last slide
			if(position==numberOfSlides-1){ $('#rightNav').hide() }
			else { $('#rightNav').show() }
		};  
};
