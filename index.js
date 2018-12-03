<div ondrop="myFunction(event)"></div>

doc.getElementById "table"


// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.fantasydata.net/v3/nba/stats/JSON/AllStars/2017', true);

request.onload = function () {
  // Begin accessing JSON data here
  }
}

// Send request
request.send();

// Begin accessing JSON data here
var data = JSON.parse(this.response);

data.forEach(movie => {
  // Log each movie's title
  console.log(movie.title);
});

// Begin accessing JSON data here
var data = JSON.parse(this.response);

if (request.status >= 200 && request.status < 400) {
  data.forEach(movie => {
    console.log(movie.title);
  });
} else {
  console.log('error');
}


const app = document.getElementById('table');
