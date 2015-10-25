$(document).ready(function() {
	console.log("Ready!");

	
$(".learnmore").click(learnMore);
	function learnMore() {
	$("#learnmoretext").slideDown(400);
} 

$(".readmore").click(readMore);
	function readMore() {
	$(".readmore").slideUp(400);
	$("#show-this-on-click").slideDown(400);
	$(".readless").slideDown(400);
}

$(".readless").click(readLess);
	function readLess() {
	$("#show-this-on-click").slideUp(400);
	$(".readless").slideUp(400);
	$(".readmore").show();
}

$(".readmore2").click(readMore2);
	function readMore2() {
	$(".readmore2").slideUp(400);
	$("#show-this-on-click2").slideDown(400);
	$(".readless2").slideDown(400);
}

$(".readless2").click(readLess2);
	function readLess2() {
	$("#show-this-on-click2").slideUp(400);
	$(".readless2").slideUp(400);
	$(".readmore2").show();
}







});