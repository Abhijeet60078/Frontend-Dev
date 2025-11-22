function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Boiling failed") : resolve("Water boiled");
    }, 1000 + Math.random() * 1000);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Brewing failed") : resolve("Coffee brewed");
    }, 1000 + Math.random() * 1000);
  });
}

function pourCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.2 ? reject("Pouring failed") : resolve("Coffee ready for the team!");
    }, 1000 + Math.random() * 1000);
  });
}

boilWater()
  .then(res => {
    console.log(res);
    return brewCoffee();
  })
  .then(res => {
    console.log(res);
    return pourCoffee();
  })
  .then(res => console.log(res))
  .catch(err => console.log("Process failed:", err));
