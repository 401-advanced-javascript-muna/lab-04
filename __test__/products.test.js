
const Products = require('../categories/products.model');

describe('Products Model', () => {

  let products;

  beforeEach(() => {
    products = new Products();
  });

  it('can post() a new Product', () => {
    let obj = { name: 'Test Product' };
    return products.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a Product', () => {
    let obj = { name: 'Test Product' };
    return products.create(obj)
      .then(record => {
        return products.get(record._id)
          .then(product => {
            Object.keys(obj).forEach(key => {
              // console.log('category[0][key]',category[0][key])
              expect(product[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update() a product', () => {
    let obj = { name: 'Test product' };
    return products.create(obj)
      .then(record => {
        // console.log('record-id', record)
        return products.update(record._id, { name: 'test2' })
        // console.log('record-id',record._id)
          .then(updated => {
            // console.log('updated', updated)

            expect(updated).toEqual({ name: 'test2' });
          })
          .catch(e => console.error('ERR', e));

      });
  });



  it('can delete() a product', () => {
    let obj = { name: 'Test product' };
    return products.create(obj)
      .then(record => {
        console.log('record-id', record);
        return products.delete(record._id)
        // console.log('record-id',record._id)
          .then(deleted => {
            // console.log('deleted', deleted)

            expect(deleted).toEqual(undefined);
          })
          .catch(e => console.error('ERR', e));

      });
  });
});
