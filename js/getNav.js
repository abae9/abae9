$.get("http://abae9.github.io/partials/nav.html", function(data) {

  $(document).ready(function() {
	//check if this document has .container
	var container = $(".container");
	//if so add nav.html contents to the top
	if (container) {
  	container.prepend(data)
  	//container.fadeIn();
	}
  });
});