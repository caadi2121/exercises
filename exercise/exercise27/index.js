function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;

      if (success) {
        resolve("Success!");
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
}

getMessage()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });