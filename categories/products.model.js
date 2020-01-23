'use strict';

const uuid = require('uuid/v4');

const schema = {
  
  id :{ required :true},
price :{required :true},
weight :{required :true},
quantity_in_stock:{required :true},
}

class Products {
  constructor(record) {
    record.id = uuid();

    if (this.isValid(record)) { return record }
    else { return undefined };
  }

  isValid(data) {
    return true;
  }
}

module.exports = Products;