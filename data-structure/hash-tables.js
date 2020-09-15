/**
 * What is a Hash Table?
 *
 * Hash tables are used to store key-value pairs. They are like arrays
 * but the keys are not ordered. Unlike arrays, hash tables are fast
 * for all of the following operations: finding values, adding new values,
 * and removing values!
 *
 * JS has Objects and Maps natively.
 *
 * What is a Hash Function?
 * To implement a hash table, we'll be using an array.
 * In order to look up values by key, we need a way to
 * convert keys into valid array indices.
 * A function that performs this task is called a Hash Function.
 */

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      for (let item of this.keyMap[index]) {
        if (item[0] === key) return item[1];
      }
    }

    return undefined;
  }

  set(key, val) {
    let index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    this.keyMap[index].push([key, val]);
  }

  keys() {
    let keys = [];
    for (let key of this.keyMap) {
      if (key) {
        for (let item of key) {
          if (!keys.includes(item[0])) {
            keys.push(item[0]);
          }
        }
      }
    }
    return keys;
  }

  values() {
    let values = [];
    for (let value of this.keyMap) {
      if (value) {
        for (let item of value) {
          if (!values.includes(item[1])) {
            values.push(item[1]);
          }
        }
      }
    }
    return values;
  }
}
