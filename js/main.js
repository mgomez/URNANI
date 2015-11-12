$(function(){
	$(document).on("click", "#navbar a, .nav-xhr", function(e){
		var $this   = $(this);
		var xhr     = $this[0].className == "btn nav-xhr";
		var section = $this.closest('ul').prop("id") || $this.data("section");
		var slide   = $this.data("href");
		var url     = "views/"+section+"/"+slide+".html";
		$.get(url, function(html){
			$("#main").html(html);
			if(!xhr){
				$(".navbar-toggle").trigger("click");
			}				
		});
	})
});
