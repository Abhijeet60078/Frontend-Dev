function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.3 ? reject("Server A failed") : resolve("Server A done");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.3 ? reject("Server B failed") : resolve("Server B done");
    }, 3000);
  });
}

Promise.all([serverA(), serverB()])
  .then(res => console.log("Deployment completed for all servers", res))
  .catch(err => console.log(err));

Promise.race([serverA(), serverB()])
  .then(res => console.log("Fastest response:", res))
  .catch(err => console.log(err));
