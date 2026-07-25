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
// Fetch API -> POST request
/*
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My First Post",
    body: "This is the post content.",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));
*/

// Axios -> Is same as fetch but it is a library that allows you to make HTTP requests from the browser and Node.js. It is a promise-based HTTP client for JavaScript. It provides an easy-to-use API for making HTTP requests and handling responses. It also has built-in support for request and response interceptors, which can be used to modify requests or responses before they are sent or received.  Here we are adding Axios to our project using the CDN link in the HTML file. Then we are making a GET request to the Random User API and logging the response data to the console. We are also using the .then() method to handle the promise returned by the Axios request, and logging the first result of the response data to the console.
/*
axios.get("https://randomuser.me/api/")
  .then((response) => {
    console.log(response.data.results[0]);
    });
*/
// Axios -> POST request
/*axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
*/

// Promises -> A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write asynchronous code in a more synchronous manner, making it easier to read and maintain. A Promise can be in one of three states: pending, fulfilled, or rejected. When a Promise is fulfilled, it means that the asynchronous operation has completed successfully, and the resulting value is available. When a Promise is rejected, it means that the asynchronous operation has failed, and an error message is available. You can use the .then() method to handle the fulfilled state of a Promise and the .catch() method to handle the rejected state of a Promise.
/*
const maleUserPromise = new Promise(function (resolve, reject) {
  fetch(`https://randomuser.me/api/`)
    .then((response) => response.json())
    .then((json) => {
      if (json.results[0].gender === "male") {
        resolve(json.results[0]);
      } else {
        reject();
      }
    });
});
maleUserPromise
  .then((maleUser) => {
    console.log(maleUser);
  })
  .catch(() => {
    console.log("No male user found.");
  });
*/

// Callbacks => A callback is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are commonly used in asynchronous programming to handle the results of asynchronous operations.

// function abc(a, b) {
//   console.log(a);
//   b();
// }

// abc(1, function () {
//   console.log("Hello");
// });

// function getData(url, callback) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       callback(data);
//     });
// }

// getData("https://randomuser.me/api/", function (data) {
//   console.log(`Gender : ${data.results[0].gender}, First Name: ${data.results[0].name.first}, Last Name: ${data.results[0].name.last}, Email: ${data.results[0].email}`);
// });

// Async & Await => Async/Await is a modern way to handle asynchronous operations in JavaScript. It allows you to write asynchronous code in a more synchronous manner, making it easier to read and maintain. The async keyword is used to define an asynchronous function, and the await keyword is used to pause the execution of the function until a Promise is resolved or rejected. This allows you to write code that looks synchronous, but is actually asynchronous under the hood. In this example, we are using async/await to fetch data from the Random User API and log the first result to the console.

// async function abc() {
//   let a = await fetch("https://randomuser.me/api/");
//   a = await a.json();
//   console.log(a);
//   a = await a.results[0];
//   console.log(a);
// }
// abc();

// Event Loop => The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible. It is responsible for managing the execution of multiple pieces of code, including asynchronous callbacks, and ensuring that they are executed in the correct order. The event loop continuously checks the call stack and the task queue, and if the call stack is empty, it takes the first task from the queue and pushes it onto the call stack for execution. This allows JavaScript to handle multiple tasks concurrently without blocking the main thread.

// Callback VS Promises VS Async/Await => Callbacks, Promises, and Async/Await are all ways to handle asynchronous operations in JavaScript. Callbacks are the oldest and most basic way to handle asynchronous operations, but they can lead to callback hell and make code difficult to read and maintain. Promises provide a more structured way to handle asynchronous operations, allowing you to chain multiple operations together and handle errors more easily. Async/Await is the most modern way to handle asynchronous operations, allowing you to write asynchronous code in a more synchronous manner, making it easier to read and maintain. Overall, Promises and Async/Await are generally preferred over callbacks for handling asynchronous operations in modern JavaScript development.

// Callback function to fetch data from an API and log the results to the console
// function dataFetcher(url, callback) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       callback(data);
//     });
// }
// dataFetcher("https://randomuser.me/api/", function (data) {
//   console.log(
//     `Gender : ${data.results[0].gender}, First Name: ${data.results[0].name.first}, Last Name: ${data.results[0].name.last}, Email: ${data.results[0].email}`,
//   );
// });

// Promise function to fetch data from an API and log the results to the console
// const dataFetcherPromise = new Promise(function (resolve, reject) {
//   fetch("https://randomuser.me/api/")
//     .then((response) => response.json())
//     .then((data) => {
//       resolve(data);
//     });
// });
// dataFetcherPromise
//   .then((data) => {
//     console.log(
//       `Gender : ${data.results[0].gender}, First Name: ${data.results[0].name.first}, Last Name: ${data.results[0].name.last}, Email: ${data.results[0].email}`,
//     );
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// function dataFetcher(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// }
// dataFetcher("https://randomuser.me/api/")
//   .then((data) => {
//     console.log(
//       `Gender : ${data.results[0].gender}, First Name: ${data.results[0].name.first}, Last Name: ${data.results[0].name.last}, Email: ${data.results[0].email}`,
//     );
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// Async/Await function to fetch data from an API and log the results to the console

// async function dataFetcher(url) {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(
//       `Gender : ${data.results[0].gender}, First Name: ${data.results[0].name.first}, Last Name: ${data.results[0].name.last}, Email: ${data.results[0].email}`,
//     );
//   }
//   catch (error) {
//     console.error(error);
//   }
// }

// dataFetcher("https://randomuser.me/api/");

// Generator => We can pause the flow of code execution and resume it later. This is useful for handling asynchronous operations, as we can yield control back to the event loop while waiting for a response from an API, and then resume execution once the response is received.In this example, we are defining a generator function that yields three values. We then create a generator object by calling the generator function, and use the .next() method to iterate through the yielded values. Each time we call .next(), the generator function is paused at the yield statement, and execution resumes when we call .next() again.

// function* generatorFunction() {
//   console.log("Generator function started");
//   yield "First yield";
//   console.log("Generator function resumed");
//   yield "Second yield";
//   console.log("Generator function finished");
//   yield "Third yield";
// }

// const generator = generatorFunction();
// console.log(generator.next()); // "Generator function started" is logged, and "First yield" is returned & Done: false
// console.log(generator.next()); // "Generator function resumed" is logged, and "Second yield" is returned & Done: false
// console.log(generator.next()); // "Generator function finished" is logged, and "Third yield" is returned & Done: false
// console.log(generator.next()); // undefined is returned & Done: true
// console.log(generator.next().value); // "Generator function started" is logged, and "First yield" is returned
// console.log(generator.next().value); // "Generator function resumed" is logged, and "Second yield" is returned
// console.log(generator.next().value); // "Generator function finished" is logged, and undefined is returned

// web workers => Usully, JavaScript runs in a single thread, which means that it can only execute one task at a time. This can lead to performance issues when running long-running tasks, as they can block the main thread and make the application unresponsive. Web Workers allow you to run JavaScript code in a separate thread, which can help improve performance and responsiveness.

// var nums = Array.from({ length: 10000 }, (_, i) => i + 1);

// In this example ^ we are creating nums array with 10000 numbers from 1 to 10000 using Array.from() method. The first argument is an object with a length property, which specifies the number of elements in the array. The second argument is a mapping function that takes two arguments: the current element (which we are not using, so we use _ as a placeholder) and the index of the current element (i). We are returning i + 1 to create an array of numbers from 1 to 10000.

var nums = Array.from({ length: 10000 }, (_, i) => i + 1);
const worker = new Worker("worker.js"); // In this line, we are creating a new Worker object and passing the path to the worker.js file as an argument. This will create a new thread that will run the code in the worker.js file. We can then use the postMessage() method to send data to the worker thread. In this case, we are sending the nums array to the worker thread for processing.
worker.postMessage(nums);

worker.onmessage = function (event) {
  console.log("Result from worker:", event.data); // In this line, we are defining an onmessage event handler for the worker object. This function will be called whenever the worker thread sends a message back to the main thread using postMessage(). The event.data property contains the data sent from the worker thread. In this case, we are logging the result of the calculation performed by the worker thread to the console.
}