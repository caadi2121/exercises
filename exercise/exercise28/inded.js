function getMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Success!");
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
}

async function showMessage() {
  try {
    const message = await getMessage();
    console.log(message);
  } catch (error) {
    console.log("Error:", error);
  }
}

showMessage();