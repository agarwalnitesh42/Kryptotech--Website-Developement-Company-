$(document).ready(function(){

	var count=0;

	var vv = setInterval(function(){changeDisplay()},10000);

	//$('.services button').hover(function(){
	//	$(this).text("Contact Us");
	//})

	$('.menuLogo').click(function(){
		$('#menu').slideToggle();
	});
	

	(function(){$('.services button').text("Start A Project");});

	function changeDisplay()
	{

		if(count==0){
			$('#display').css({left: '-100%'});
			$('#display2').css({left: '0%'});
			$('#display3').css({left: '100%'});
			$('#display2 .mainHeading').css({AnimationPlayState : 'running' });
			count++;
		}

		else if(count==1){
			$('#display').css({left: '-200%'});
			$('#display2').css({left: '-100%'});
			$('#display3').css({left: '0%'});
			$('#display3 .mainHeading').css({AnimationPlayState : 'running' });
			count++;
		}

		else if(count==2){
			$('#display').css({left: '0%'});
			$('#display2').css({left: '100%'});
			$('#display3').css({left: '200%'});
			count=0;
		}
	}


});

$(document).scroll(function(){


	if( $(this).scrollTop() > 500 )
	{
		$('#header').css({background: '#413839'});
		$('#header').css({borderBottom: 'none'});
		$('#menu li').css({color: '#fff'});
		$('.logoHead').css({backgroundImage: 'url(images/logo.png)'});
	}

	else
	{
		$('#header').css({background: 'none'});
		$('#header').css({borderBottom: 'none'});
		$('#menu li').css({color: '#fff'});
		$('.logoHead').css({backgroundImage: 'url(images/logo.png)'});
	}

	if( $(this).scrollTop() > 300 )
	{
		$('.aboutUs').css({AnimationPlayState: 'running'});
	}

	if( $(this).scrollTop() > 700 )
	{
		$('.tab').css({AnimationPlayState: 'running'});
	}

	if( $(this).scrollTop() > 1900 )
	{
		$('#comment p').css({AnimationPlayState: 'running'});
	}

});

//Scroll up to see menu JS

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#header').hide();
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#header').show();
        }
    }
    
    lastScrollTop = st;
}


//typing style

	var text = "";
	var count = 0;
	var maxspeed = 200;
	
	$(document).ready(function(){
	
		function typeit(punch){
			text = punch;
			type();
		}
		
		function character(start, end, text){
			return text.substring(start, end);
		}
		
		function type() {
			var ran = Math.floor(Math.random() * maxspeed);
			setTimeout(type, ran);
			$('.never').append(character(count, count+1, text));
			count++;
		}

		$(document).scroll(function(){

			//if( $(this).scrollTop() > 1700 )
				//typeit("");

		});


		
        //var myVar=setInterval(function(){typeit("We NEVER work on two Projects simultaneously.")},1700);
        
        //var vv=setInterval(function(){
        //    $('#weList').fadeIn();
        //},1800);
		
	});

function changeButtonText(x)
	{
		if(x==1)
			$('.services button').text("Contact Us");
		else
			$('.services button').text("Start A Project");
	}