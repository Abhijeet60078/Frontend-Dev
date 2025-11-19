class Cart {
    constructor() {
        this.items = [];
        this.coupon = null;
    }
    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }
    applyCoupon(code) {
        if (/^(SAVE|DISC)\d{2}$/.test(code)) {
            this.coupon = parseInt(code.match(/\d+/)[0]);
        }
    }
    getTotal() {
        let total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        if (this.coupon) total -= total * (this.coupon / 100);
        return total;
    }
}
const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);
cart.applyCoupon("SAVE20");
console.log(cart.getTotal());
