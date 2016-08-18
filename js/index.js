$(document).ready(function() {
	$("#intro").show();
	//Choocing game
    $("#play").bind("click", function(event) {
        $("#chooseGameMode").show();
    });
    //One player
    $("#onePlayer").bind("click", function(event){
    	$("#strOne").show();
    	$("#intro").hide();
    	$("#chooseGameMode").hide();

    });

    $("#playOne").bind("click", function(event){

    });
});
//Visal 
//JS
function name(){
	alert("user");
}
