var swiper = new Swiper('.swiper-container', {
	cssMode: true,
	autoplay: {
    delay: 3000,
  },
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	mousewheel: true,
	keyboard: true,
});


/////////isotop
var $grid = $('.grid').isotope({
	itemSelector: '.grid-item',
});

$('.filter-button-group').on( 'click', '.button', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
});

////// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
 var $buttonGroup = $( buttonGroup );
 $buttonGroup.on( 'click', 'button', function() {
	 $buttonGroup.find('.is-checked').removeClass('is-checked');
	 $( this ).addClass('is-checked');
 });
});