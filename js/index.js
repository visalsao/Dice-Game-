var ran = Math.random();
if (ran < 1/6) {
	alert("1");
} else if (ran > 1/6 && ran < 2/6) {
	alert("2");
} else if (ran > 2/6 && ran < 3/6) {
	alert("3");
} else if (ran > 3/6 && ran < 4/6) {
	alert("4");
} else if (ran > 4/6 && ran < 5/6) {
	alert("5");
} else if (ran > 5/6 && ran < 1) {
	alert("6");
}

$( document ).ready( function( ){
	$("#play").blind( "click", function(event) {
		$("chooseGameMode").show();
	})
});