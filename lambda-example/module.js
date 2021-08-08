async function someAsyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!!Math.round(Math.random())) resolve("async function success");
      else reject("async function error");
    }, 1000);
  });
}
module.exports = { someAsyncFunction };
