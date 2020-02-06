/* eslint-disable no-empty-function */
'use strict ';

const validator = require('../lib/validator.js');

//Using Matchers : https://jestjs.io/docs/en/expect


describe('validator module performs basic validation of', () => {

  // TODO: Make this series of tests less repetitive ... DRY it out
  let str = 'yes';
  let num = 1;
  let arr = ['a'];
  let obj = { x: 'y' };
  let func = () => { };
  let bool = false;
  it('strings', () => {
    expect(validator.isString(str)).toBeTruthy();
    expect(validator.isString(num)).toBeFalsy();
    expect(validator.isString(arr)).toBeFalsy();
    expect(validator.isString(obj)).toBeFalsy();
    expect(validator.isString(func)).toBeFalsy();
    expect(validator.isString(bool)).toBeFalsy();
  });

  it('numbers', () => {
    expect(validator.isNum(str)).toBeFalsy();
    expect(validator.isNum(num)).toBeTruthy();
    expect(validator.isNum(arr)).toBeFalsy();
    expect(validator.isNum(obj)).toBeFalsy();
    expect(validator.isNum(func)).toBeFalsy();
    expect(validator.isNum(bool)).toBeFalsy();
  });

  it('arrays', () => {

    expect(validator.isArray(str)).toBeFalsy();
    expect(validator.isArray(num)).toBeFalsy();
    expect(validator.isArray(arr)).toBeTruthy();
    expect(validator.isArray(obj)).toBeFalsy();
    expect(validator.isArray(func)).toBeFalsy();
    expect(validator.isArray(bool)).toBeFalsy();
  });

  it('objects', () => {

    expect(validator.isObject(str)).toBeFalsy();
    expect(validator.isObject(num)).toBeFalsy();
    expect(validator.isObject(arr)).toBeTruthy();
    expect(validator.isObject(obj)).toBeTruthy();
    expect(validator.isObject(func)).toBeFalsy();
    expect(validator.isObject(bool)).toBeFalsy();
  });

  it('booleans', () => {
    expect(validator.isBool(str)).toBeFalsy();
    expect(validator.isBool(num)).toBeFalsy();
    expect(validator.isBool(arr)).toBeFalsy();
    expect(validator.isBool(obj)).toBeFalsy();
    expect(validator.isBool(func)).toBeFalsy();
    expect(validator.isBool(bool)).toBeTruthy();
  });

  it('functions', () => {
    expect(validator.isFunc(str)).toBeFalsy();
    expect(validator.isFunc(num)).toBeFalsy();
    expect(validator.isFunc(arr)).toBeFalsy();
    expect(validator.isFunc(obj)).toBeFalsy();
    expect(validator.isFunc(func)).toBeTruthy();
    expect(validator.isFunc(bool)).toBeFalsy();
  });

});



describe('validator module performs complex validations', () => {


  it('validates the presence of required object properties at any level this is the good', () => {
    // i.e. does person.hair.color exist and have a good value, not just person.hair
    const susan = {
      id: '123-45-6789',
      name: 'Susan McDeveloperson',
      age: 37,
      children: [],
    };
    expect(validator.isValid(susan)).toBeTruthy();
  });
  it('validates the presence of required object properties at any level', () => {
    // fred do not have age so the result should be false
    const fred = {
      id: 38,
      name: 'Freddy McCoder',
      children: [],
    };
    expect(validator.isValid(fred)).toBeFalsy();
  });

  it('validates the proper types of object properties', () => {
    // suzan id is anumber so the result should be false
    const susan = {
      id: 1,
      name: 'Susan McDeveloperson',
      age: 37,
      children: [],
    };
    expect(validator.isValid(susan)).toBeFalsy();
  });

  it('validates the types of values contained in an array', () => {
    // i.e. an array of all strings
    const susan = {
      id: '123-45-6789',
      name: 'Susan McDeveloperson',
      age: 37,
      children: [],
    };
    susan.children.forEach(child => {
      expect(typeof child).toEqual('string');
    });

  });

  it('validates a value array against an approved list', () => {
    // i.e. a string might only be allowed to be "yes" or "no"
    const susan = {
      id: '123-45-6789',
      name: 'Susan McDeveloperson',
      age: 37,
      children: [],
      haveAcar: 'no',

    };

    expect(susan.haveAcar.includes('yes')).toBeFalsy();
  });

  //   // TODO: Cover so, so many more cases

});