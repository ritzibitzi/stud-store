const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

//Create a class to handle logic associated with Store.
class Store {
    //Methods needed for Store model: list products from database
    static async listProducts() {
        //pulling results from database.
        const products = storage.get("products").value();
        return products;
    }
}

module.exports = Store;