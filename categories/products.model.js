

// const uuid = require('uuid/v4');
const DataModel = require('../memory-data-model.js');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {

      id: { required: true },
      price: { required: true },
      weight: { required: true },
      quantityInStock: { required: true },
    };
  }}

module.exports = Products;