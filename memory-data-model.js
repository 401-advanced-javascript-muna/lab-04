

const uuid = require('uuid/v4');  //create a uniqe id

class Model {

  constructor() {
    this.database = [];
  }

  get(id) {
    let response = id ? this.database.filter((record) => record.id === id) : this.database;
    // console.log('get',response,this.database)
    return Promise.resolve(response);
  }

  create(record) {
    record.id = uuid();
    this.database.push(record);
    // console.log('create',record)

    return Promise.resolve(record);
  }

  update(id, record) {
    // console.log('update()',id,'db',this.database)

    this.database = this.database.map((item) => (item.id === id) ? record : item);
    // console.log('update',record,'db',this.database)
    return Promise.resolve(record);
  }

  delete(id) {
    //   console.log('id',id)
    this.database = this.database.filter((record) => record.id === id);
    // console.log('delete',this.database)
    return Promise.resolve();
  }

}

module.exports = Model;