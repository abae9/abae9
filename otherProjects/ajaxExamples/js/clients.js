
$(document).ready(function(){
	$("#getClients").on("click", function(){
	var url = "http://abae9.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json";
	$.getJSON(url, function (data){
var html = "<table>" +
"<tr><th>Name</th><th>Email</th><th>Company</th></tr>";

	$.each(data, function(index, item){//item = each object
		html+="<tr>"+
		"<td>" + item.name + "</td>" +
		"<td>" + item.email + "</td>" +
		"<td>" + item.company + "</td>" +
		"</tr>";
		});

	html += "</table>";
	$("#data").append(html);
	//alert(data);
	//console.dir(data);
	});// get JSON

	});//click

});
