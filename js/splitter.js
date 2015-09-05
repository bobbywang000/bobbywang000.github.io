
function convert() {
	var input = $("#input").val();
	var split = input.split(/([.?!]+ )/);
	var out = "";
	for (i = 0; i<split.length; i++) {
		out += split[i] + "\n";
		console.log(split[i]);
	}
	$("#output").val(out);
}