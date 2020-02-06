

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input object?
 *
 * @param input
 * @returns {boolean}
 */
validator.isObject = (input) => {
  return typeof input === 'object';
};
/**
 * Based on a set of rules, is the input array?
 *
 * @param input
 * @returns {boolean}
 */
validator.isArray = (input) => {
  return Array.isArray(input);
};
/**
 * Based on a set of rules, is the input bolean?
 *
 * @param input
 * @returns {boolean}
 */
validator.isBool = (input) => {
  return typeof input === 'boolean';
};
/**
* Based on a set of rules, is the input function?
*
* @param input
* @returns {boolean}
*/
validator.isFunc = (input) => {
  return typeof input === 'function';
};

/**
 * Is this a number?
 * @param input
 * @returns {boolean}
 */
validator.isNum = (input) => {
  return typeof input === 'number';
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
  return typeof input === 'string';

};
/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @returns {boolean}
 */
// const fred = {
//     id:38,
//     name:'Freddy McCoder',
//     children:[],
//   };
validator.isValid = (input) => {

  if (!(input.id && typeof input.id === 'string')) { return false; }
  if (!(input.name && typeof input.name === 'string')) { return false; }
  if (!(input.age && typeof input.age === 'number')) { return false; }
  if (!(input.children && Array.isArray(input.children))) { return false; }
  return true;
};

