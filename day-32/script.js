// SetTimeout is a function that allows you to execute a piece of code after a specified delay (in milliseconds). In this example, the code will log the numbers 1, 2, and 4 immediately, and then log the number 3 after a delay of 1000 milliseconds (1 second).
/*
console.log(1);
console.log(2);
setTimeout(function () {
  console.log(3);
}, 1000);
console.log(4);
*/

// SetInterval is a function that allows you to execute a piece of code repeatedly at specified intervals (in milliseconds). In this example, the code will log "Hey => 0", "Hey => 1", ..., "Hey => 5" every 2000 milliseconds (2 seconds), and then stop after logging "Hey => 5".

/*
let i = 0;
let interval = setInterval(() => {
  console.log("Hey => " + i++);
  if (i > 5) {
    clearInterval(interval);
  }
}, 2000); */

// Fetch API --> In this example, we are using the Fetch API to make a GET request on different APIs. The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers. It returns a Promise that resolves to the Response object representing the response to the request. We can then use the .json() method to parse the response body as JSON. After that, we print the data to the console
/*
fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then((json) => console.log(json.results[0]));

fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);
    // Post Title
    console.log(posts.title);
  });
*/

// Axios -> Is same as fetch but it is a library that allows you to make HTTP requests from the browser and Node.js. It is a promise-based HTTP client for JavaScript. It provides an easy-to-use API for making HTTP requests and handling responses. It also has built-in support for request and response interceptors, which can be used to modify requests or responses before they are sent or received. 
/*
axios.get("https://randomuser.me/api/")
  .then((response) => {
    console.log(response.data.results[0]);
    });
*/