const Categories = require('../categories/categories.js');

describe('Categories Model', () => {

  let categories;

  beforeEach(() => {
    categories = new Categories();
  });

  it('can post() a new category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        return categories.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              // console.log('category[0][key]',category[0][key])
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can update() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        // console.log('record-id', record)
        return categories.update(record._id, { name: 'test2' })
        // console.log('record-id',record._id)
          .then(updated => {
            // console.log('updated', updated)

            expect(updated).toEqual({ name: 'test2' });
          })
          .catch(e => console.error('ERR', e));

      });
  });



  it('can delete() a category', () => {
    let obj = { name: 'Test Category' };
    return categories.create(obj)
      .then(record => {
        console.log('record-id', record);
        return categories.delete(record._id)
        // console.log('record-id',record._id)
          .then(deleted => {
            // console.log('deleted', deleted)

            expect(deleted).toEqual(undefined);
          })
          .catch(e => console.error('ERR', e));

      });
  });
});





