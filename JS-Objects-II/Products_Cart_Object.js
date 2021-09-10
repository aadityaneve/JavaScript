/* Given an input of products in the below format (Name Quantity Price)
Input
Rice 2 60
Dal 3 50
Salt 1 20
Create an object with the key data which is an array of objects with the format {name: "Rice", quantity: 2, price: 60}
The object must have a method called total which calculates the total values of items (multiplying quantity of each with its price)
Sample output for the above case 290 */

var products = {
  data: [],

  addProduct: function(name, quantity, price){
    var product = {
      name: name,
      quantity: quantity,
      price: price
    }
    this.data.push(product);
  },

  total: function(){
    var totalAmount = 0;
    for(let i=0;i<this.data.length;i++){
      totalAmount+=this.data[i].quantity * this.data[i].price;
    }
    return totalAmount;
  }
}

products.addProduct("Rice", 2, 60);
products.addProduct("Dal", 3, 50);
products.addProduct("Salt", 1, 20);

console.log("Total Price Is : "+products.total());