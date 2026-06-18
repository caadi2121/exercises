function blockingDelay() {
  const start = Date.now();

  while (Date.now() - start < 2000) {
  }

  return "2 seconds finished";
}

console.log("Start");

console.log(blockingDelay());

console.log("End");



console.log("nonbloking")
function nonBlockingDelay() {
  setTimeout(() => {
    console.log("4 seconds finished");
  }, 4000);
}

console.log("Start");

nonBlockingDelay();

console.log("End");