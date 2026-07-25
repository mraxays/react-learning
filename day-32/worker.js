// worker.js
// In this example, we will create a simple web worker that listens for messages from the main thread and logs the received data to the console.

// onmessage = function (event) {
//   const data = event.data;
//   console.log("Worker received data:", data);
// };

// In this example, we will create a simple web worker that listens for messages from the main thread and performs a calculation on the received data. The result will be sent back to the main thread using postMessage.
onmessage = function (event) {
  const result = event.data.reduce((acc, curr) => {
    return curr + acc;
  }, 0);
  postMessage(result);
};
