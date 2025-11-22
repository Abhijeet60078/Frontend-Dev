function loadProfile() {
  return new Promise((resolve, reject) =>
    setTimeout(() => Math.random() < 0.3 ? reject("Profile fail") : resolve("Profile Loaded"), 2000)
  );
}
function loadPosts() {
  return new Promise((resolve, reject) =>
    setTimeout(() => Math.random() < 0.3 ? reject("Posts fail") : resolve("Posts Loaded"), 1500)
  );
}
function loadMessages() {
  return new Promise((resolve, reject) =>
    setTimeout(() => Math.random() < 0.3 ? reject("Messages fail") : resolve("Messages Loaded"), 1000)
  );
}

let start = Date.now();

Promise.allSettled([loadProfile(), loadPosts(), loadMessages()])
  .then(res => {
    console.log(res);
    console.log("Time:", Date.now() - start, "ms");
  });
