const CURRENT_TABLE = (document.getElementById('basketballStatsTable'))? document.getElementById('basketballStatsTable') : document.getElementById('footballStatsTable'),
	tRows = CURRENT_TABLE.childNodes.childNodes;


// The nav menu dropdown code
	function myFunction() {
	    document.getElementById("myDropdown").classList.toggle("show");
	}

	document.getElementById("myBtn").addEventListener("click", myFunction); // document.getElementById("myBtn").onclick = function() {myFunction()};





// Create a request variable and assign a new XMLHttpRequest object to it.
	var request = new XMLHttpRequest();

	// Open a new connection, using the GET request on the URL endpoint
	request.open('GET', 'https://api.fantasydata.net/v3/nba/stats/JSON/AllStars/2017', true);

	request.onload = function () {
	  // Begin accessing JSON data here
	}


	// Send request
	request.send();

	function dataHandler() {
		// Begin accessing JSON data here
		var data = JSON.parse(this.response);

		if (request.status >= 200 && request.status < 400) {
		  data.forEach(movie => {
		    console.log(movie.title);
		  });
		} else {
		  console.log('error');
		}
	}





// Football.com
	var testData = [ "First, 1", 2, 3.3, [5,4,3,2,1,0], true], 
		x = 0;

	while (x < testData.length) {
	    var createdNode = document.createTextNode(x);


	    // CURRENT_TABLE.append(createdNode);

	    // Code for table row ONE
	    // Code for table row TWO
	    // Code for table row THREE
	    // Code for table row FOUR
	    // Code for table row FIVE

	    x++;
	}

	$(function() {
	    var params = {
	        // Request parameters
	    };

	    $.ajax({
	        url: "https://api.fantasydata.net/v3/nba/stats/{format}/DfsSlatesByDate/{date}?" + $.param(params),
	        beforeSend: function(xhrObj){
	        // Request headers
	        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{subscription key}");
	        },
	        type: "GET",
	        // Request body
	        data: "{body}"
	    })
	    .done(function(data) {
	        alert("success");
	    })
	    .fail(function() {
	        alert("error");
	    });
	});