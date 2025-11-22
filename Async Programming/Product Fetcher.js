async function loadProducts() {
  try {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();

    data.forEach(p => {
      console.log("Product:", p.title);
      console.log("Price: $" + p.price);
      console.log("Image:", p.image);
    });

  } catch {
    console.log("Failed to load products. Please try again.");
  }
}

loadProducts();
