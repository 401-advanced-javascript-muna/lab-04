

const DataModel = require('../memory-data-model.js');
// const productsModel = require('../categories/products.model.js');


class Categories extends DataModel {
  constructor() {
    super();
    this.schema = {
      id: { required: true},
      name: { required: true},
    };
  }
}

module.exports = Categories;