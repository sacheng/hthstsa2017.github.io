$(document).ready(function(){
	/*$('.modal-trigger').leanModal();*/
	// Init ScrollMagic, use scrollbar to trigger animation defined in scene
	var controller = new ScrollMagic.Controller();
	//pin the intro
	var pinIntroScene = new ScrollMagic.Scene({
		triggerElement: '#landing',
		triggerHook: 0,
		// duration for when it is pinned duration: '30%'
	})
	.setPin('#landing', {pushFollowers: false})
	.addTo(controller);
	/*
	///parallax scene
	var slideParallaxScene = new ScrollMagic.Scene({
		triggerElement: '.bcg-parallax',
		triggerHook: 1,
		duration: '200%'
	})
	.setTween(TweenMax.from('.bcg', 1, {y: '-50%', ease:Power0.easeNone}))
	.addTo(controller);
	*/
	/*
	//build a scene

	var fade2 = new ScrollMagic.Scene({
		triggerElement: '#statepic',
		duration: '90%', //defines ending indicator
		triggerHook: 0.65
		//reverse: false means animation only happens once
	})
	.setClassToggle('#statepic', 'fade-in') // add class to project 01
	.addIndicators({
		name: 'fade scene',
		colorTrigger: 'black',
		indent: 200,
		colorStart: '#75C695'
	})	//plugin required)
	.addTo(controller);
*/	
	

	//loop through each .project element
	$('.project').each(function(){
		//build a scene
		var ourScene = new ScrollMagic.Scene({
			triggerElement: this, //this.children[0] to select first child element of div //defines ending indicator
			triggerHook: 0.65
			//reverse: false means animation only happens once
		})
		.setClassToggle(this, 'fade-in') // add class to project 01
		.addIndicators({
			name: 'fade scene',
			colorTrigger: 'black',
			indent: 200,
			colorStart: '#75C695'
		})	//plugin required)
		.addTo(controller);
	});

	var state_conference_off;
	calculateOffsets();
	$(window).on("resize", calculateOffsets());
});



var waypoint2 = new Waypoint({
  element: document.getElementById('third'),
  handler: function(direction) {
  	console.log('Direction: ' + direction);
  	if (direction == 'down')	{
		$('#second').css('background-color', 'white');
	} else {
		$('#second').css('background-color', '');
	}
  },
  offset: 300 
})
var waypoint2 = new Waypoint({
  element: document.getElementById('fifth'),
  handler: function(direction) {
  	console.log('Direction: ' + direction);
  	if (direction == 'down')	{
		$('#fourth').css('background-color', '#33334d');
	} else {
		$('#fourth').css('background-color', '');
	}
  },
  offset: 300 
})


function calculateOffsets() {
    state_conference_off = $("#state_conference").offset().top;
}

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	console.log(wScroll);
	if (wScroll > state_conference_off - 300)	{

		$('#state_conference').css({
			'transform': 'translate(0px,' -1*(wScroll - state_conference_off)/5 + '%)'
		});
		console.log('parallax: ' + ((wScroll - state_conference_off)/5));
	}
});	