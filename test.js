var whether = ""
var city = $('input').val();

$('button').click(function(e){
	e.preventDefault();
	var city = $('input').val();
	console.log(city);
	$.ajax({
	    url: 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&lang=fr&APPID=235c62f74e1f43c0424754a56587b275',
	    success: function (response) {
	    	whether = response
			$('p').html(whether.name)
	    }
	});
	
})
