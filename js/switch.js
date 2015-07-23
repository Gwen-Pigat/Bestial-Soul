$(document).ready(function(){
	$("#news").click(function(){
		$(".chronique").toggle(1000);
		$(".biographie").toggle(1000);
		$(".hiddenstuff").toggle(1000);
	});

	$("#chronique").click(function(){
		$(".biographie").toggle(1000);
		$(".news").toggle(1000);
		$(".hiddenstuff-1").toggle(1000);
	});

	$("#biographie").click(function(){
		$(".chronique").toggle(1000);
		$(".news").toggle(1000);
		$(".hiddenstuff-2").toggle(1000);
	});
});