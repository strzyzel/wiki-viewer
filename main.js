$(document).ready(function(){
	$("#submit").on('click', function(e){
		
		e.preventDefault();
		const query = document.querySelector("#query").value;
		const api = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
		const cb = '&format=json&callback=?';
		const urlString = api + query + cb;
		$.ajax({
			dataType: 'json',
	      	url: urlString,
		      	data: {
		        action: "opensearch",
		        format: "json",
		        search: query
		      	},
	   		type: 'GET',
	   		async: false,
	      	success: function(data) {
		        showResults(data[1], data[2], data[3]);
		    }
      	});
      	function showResults(title, desc, link) {
      		$(".output").html("");
      		if (title[0] !== undefined){
      			for (var i = 0; i < 10; i++){
      				if (title[i] !== undefined) {
 						$(".output").append("<li class=\"list-group-item\"><h3>" + title[i] + "</h3><p>" + desc[i] + "</p><a class=\"link\" href=" + link[i] + ">Read the full article</a></li>")
      				}
      			} 
      		} else {
  				$(".output").append("<p>Can't find anything!</p>");
  			}
      	}
	});
});