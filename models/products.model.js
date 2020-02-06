

// const uuid = require('uuid/v4');
const DataModel = require('./file-data-model');

class Products extends DataModel {
  constructor() {
    super();
    this.schema = {

      id: { type:'string' ,required: true },
      price: { type:'number',required: true },
      weight: {type:'number', required: true },
      quantityInStock: { type:'number',required: true },
    };
  }}

module.exports = Products;