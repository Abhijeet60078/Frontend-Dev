function design(cb) {
  setTimeout(() => cb("Design complete"), 1000);
}
function build(cb) {
  setTimeout(() => cb("Build complete"), 1000);
}
function test(cb) {
  setTimeout(() => cb("Test complete"), 1000);
}
function deploy(cb) {
  setTimeout(() => cb("Deploy complete"), 1000);
}
function celebrate(cb) {
  setTimeout(() => cb("Celebrate!"), 1000);
}

design(res => {
  console.log(res);
  build(res => {
    console.log(res);
    test(res => {
      console.log(res);
      deploy(res => {
        console.log(res);
        celebrate(res => {
          console.log(res);
        });
      });
    });
  });
});
