
var container = $('div.container');
var obj = {};

obj.name = $("#name").val();
obj.dob = $("#dob").val();
obj.hospital_born = $("#hospital").val();

// index = index of the array
// value = the actual item .name = property

// button will trigger the function
$('input#get').click(function(){
	$.ajax({
		type: 'GET', 
		url: '/data/database.json',
		dataType: 'json',
		success: function(data) {
				$.each(data, function(index, item) {
					console.log(data); //this works just fine I can see the objects
						container.append(key + ': ' + value + '</br>');
					// },
					container.append('<br/></br>')
				})
			}
		})
})


$('place#post').click(function(){
	$.ajax({
    type: 'POST',
    url: '../data/database.json',
    contentType: 'json',
    dataType: 'json',
    data: JSON.stringify(fromData),
			success: function(res) {
            console.log(res);
            console.log('Post: got response');
            console.log('POST Response Data', JSON.parse(res.data))


        },
        error: function(resquest, status, error) {
						console.error(request.responseText)
        }
		})
})

	//get list of registered numbers
$('button#button-registration').click(function(){
	$.getJSON('/data/database.json', function(data){
		$.each(data.database, function(i, a){
			$('ul').append('</li><br></br>Number ' + i +': '+ a['registration'] + '</li>' ); //ugh this only shows my objects
		});
	});
});

//get list of adoptee status
$('button#button-adoptee').click(function(){
	$.getJSON('/data/database.json', function(data){
		$.each(data.database, function(){
			$('ul').append('</li><br></br>' + this['adoptee'] + '</li>' ); //ugh this only shows my objects
		});
	});
});





