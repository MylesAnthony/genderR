$('#btnStart').click(function () {
	$('#btnStart').hide();
	$('.boy').toggle().animate({ left: '333px' }, 7500);
	$('.girl').toggle().animate({ right: '333px' }, 7500);
	$('#imgSet0Next').delay(7500).fadeIn(3000);
});

$('#imgSet0Next').click(function () {
	$('#imgSet0Next').fadeOut(2000);
	$('.boy').toggle();
	$('.girl').toggle();
	$('.img1').delay(2000).fadeIn(2000);
	$('.img2').delay(2000).fadeIn(4000);
	$('#imgSet1Next').delay(4000).fadeIn(2000);
	$('#imgSet1Back').delay(4000).fadeIn(2000);
});

$('#imgSet1Back').click(function () {
	$('.img1').fadeOut(2000);
	$('.img2').fadeOut(2000);
	$('#imgSet1Next').fadeOut(2000);
	$('#imgSet1Back').fadeOut(2000);
	$('.boy').delay(2000).toggle(2000);
	$('.girl').delay(2000).toggle(2000);
	$('#imgSet0Next').delay(2000).fadeIn(3000);
});

$('#imgSet1Next').click(function () {
	$('.img1').fadeOut(2000);
	$('.img2').fadeOut(2000);
	$('#imgSet1Next').fadeOut(2000);
	$('#imgSet1Back').fadeOut(2000);
	$('.img3').delay(2000).fadeIn(2000);
	$('.img4').delay(2000).fadeIn(4000);
	$('#imgSet2Next').delay(4000).fadeIn(2000);
	$('#imgSet2Back').delay(4000).fadeIn(2000);
});

$('#imgSet2Back').click(function () {
	$('.img3').fadeOut(2000);
	$('.img4').fadeOut(2000);
	$('#imgSet2Next').fadeOut(2000);
	$('#imgSet2Back').fadeOut(2000);
	$('.img1').delay(2000).fadeIn(2000);
	$('.img2').delay(2000).fadeIn(4000);
	$('#imgSet1Next').delay(4000).fadeIn(2000);
	$('#imgSet1Back').delay(4000).fadeIn(2000);
});

$('#imgSet2Next').click(function () {
	$('.img3').fadeOut(2000);
	$('.img4').fadeOut(2000);
	$('#imgSet2Next').fadeOut(2000);
	$('#imgSet2Back').fadeOut(2000);
	$('.img5').delay(2000).fadeIn(2000);
	$('#imgSet3Next').delay(2000).fadeIn(2000);
	$('#imgSet3Back').delay(2000).fadeIn(2000);
});

$('#imgSet3Back').click(function () {
	$('.img5').fadeOut(2000);
	$('#imgSet3Next').fadeOut(2000);
	$('#imgSet3Back').fadeOut(2000);
	$('.img3').delay(2000).fadeIn(2000);
	$('.img4').delay(2000).fadeIn(4000);
	$('#imgSet2Next').delay(4000).fadeIn(2000);
	$('#imgSet2Back').delay(4000).fadeIn(2000);
});

$('#imgSet3Next').click(function () {
	$('.img5').fadeOut(2000);
	$('#imgSet3Next').fadeOut(2000);
	$('#imgSet3Back').fadeOut(2000);
	$('.itsP').delay(2000).fadeIn(2000);
	$('#nextBtn').delay(2000).fadeIn(2000);
	$('#backBtn').delay(2000).fadeIn(2000);
});

$('#backBtn').click(function () {
	$('.itsP').fadeOut(2000);
	$('#nextBtn').fadeOut(2000);
	$('#backBtn').fadeOut(2000);
	$('.img5').delay(2000).fadeIn(2000);
	$('#imgSet3Next').delay(2000).fadeIn(2000);
	$('#imgSet3Back').delay(2000).fadeIn(2000);
});

$('#nextBtn').click(function () {
	$('.itsP').fadeOut(2000);
	$('#nextBtn').fadeOut(2000);
	$('#backBtn').fadeOut(2000);
	$('.boyReveal').fadeIn(4000);
	$('#lastBackBtn').fadeIn(4000);
});

$('#lastBackBtn').click(function () {
	$('.boyReveal').fadeOut(2000);
	$('#lastBackBtn').fadeOut(2000);
	$('.itsP').delay(2000).fadeIn(2000);
	$('#nextBtn').delay(2000).fadeIn(2000);
	$('#backBtn').delay(2000).fadeIn(2000);
});
