var print = document.getElementById("printGugudan");

$('#run').click(function() {
	var dan = $("#selectBox option:selected").val();
	console.log(dan);
	var gugudan = "";
	for (var j = 1; j <= 9; j++) {
		print.innerHTML += '<span>'+dan + "x" + j + "=" + (dan*j)+'</span><br>';
	}
});