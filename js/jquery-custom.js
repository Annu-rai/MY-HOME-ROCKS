$('#owl__top--slider').owlCarousel({
    loop: true,
    dots: true,
    autoPlay: 3000,
    items: 1,
});

$('.wrapper__seller--owl').owlCarousel({
    loop:true,
    responsiveClass:true,
    autoPlay: 3000,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:true
        },
        1024:{
            items:5,
            nav:true
        }
    }
})


$('.wrapper__owl__blog').owlCarousel({
    loop:true,
    margin:20,
    autoPlay: 3000,
    responsiveClass:true,
    navText:["<div class='nav-btn prev__slide--blog'></div>","<div class='nav-btn next__slide--blog'></div>"],
    responsive:{
        0:{
            items:1.1,
            nav:true,
        },
        600:{
            items:1.1,
            nav:true,
        },
        1024:{
            items:3.1,
            nav:true,
        }
    }
})

$('.wrapper__owl__review').owlCarousel({
    loop:true,
    dots: true,
    autoplay: 3000,
    responsiveClass:true,
    nav:true,
    navText:["<div class='nav-btn prev__slide--review'></div>","<div class='nav-btn next__slide--review'></div>"],
    responsive:{
        0:{
            items:1,
            nav:true,
          
        },
        600:{
            items:2,
            nav:true,
            
        },
        1024:{
            items:3,
            nav:true,
        }
    }
})


$('.product__details--slider').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoPlay:3000,
    nav:true,
    navText:["<div class='nav-btn product__details--prev'></div>","<div class='nav-btn product__details--next'></div>"],
    responsive:{
        0:{
            items:2,
            nav:true,
        },
        768:{
            items:3,
            nav:true,
        },
        1024:{
            items:4,
            nav:true,
        }
    }
})

// producr slider open

$('.slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
      infinite: false,
      speed: 1000,  
    // asNavFor: '.slider-thumb',
      arrows: false,
  });
  $('.slider-thumb').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    asNavFor: '.slider-content',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

// producr slider close

// menue
//   mobile menu
function openNav() {
    var element = document.getElementById("myNav");
    element.classList.toggle("mystyle");
    var element = document.getElementById("nav__icon--cross");
    element.classList.toggle("change");
   
  }
//   
// quantity counter
$('.add').click(function () {
    if ($(this).prev().val() < 20) {
    $(this).prev().val(+$(this).prev().val() + 1);
    }
});
$('.sub').click(function () {
    if ($(this).next().val() > 0) {
    if ($(this).next().val() > 0) $(this).next().val(+$(this).next().val() - 1);
    }
});

// 

$('.wrapper__hide').click(function() {
    $(this).toggleClass("wrapper__show");
}); 

//drop down hide
$(document).ready(function(){
    // Show hide popover
    $(".dropdown").click(function(){
        $(this).find(".dropdown-menu").slideToggle("fast");
    });
});
$(document).on("click", function(event){
    var $trigger = $(".dropdown");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".dropdown-menu").slideUp("fast");
    }            
});

$(document).click(function(){
    $("#dropdown").hide();
  });
  
  /* Clicks within the dropdown won't make
     it past the dropdown itself */
  $("#dropdown").click(function(e){
    e.stopPropagation();
  });

  $(document).ready(function(){
    $('#qty_input').prop('disabled', true);
    $('#plus-btn').click(function(){
    	$('#qty_input').val(parseInt($('#qty_input').val()) + 1 );
    	    });
        $('#minus-btn').click(function(){
    	$('#qty_input').val(parseInt($('#qty_input').val()) - 1 );
    	if ($('#qty_input').val() == 0) {
			$('#qty_input').val(1);
		}

    	    });
 });

 
