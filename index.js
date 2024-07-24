//myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  

  //my map
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  

  //myReduce
  function myReduce(collection, callback, acc) {
    let hasAcc = arguments.length > 2;
    if (Array.isArray(collection)) {
      let start = 0;
      if (!hasAcc) {
        acc = collection[0];
        start = 1;
      }
      for (let i = start; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else if (typeof collection === 'object') {
      let keys = Object.keys(collection);
      let start = 0;
      if (!hasAcc) {
        acc = collection[keys[0]];
        start = 1;
      }
      for (let i = start; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
      }
    }
    return acc;
  }

  //myFind
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
          return collection[key];
        }
      }
    }
    return undefined;
  }

  //filter
  function myFilter(collection, predicate) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && predicate(collection[key], key, collection)) {
          result.push(collection[key]);
        }
      }
    }
    return result;
  }
  

  //size
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
    return 0;
  }
  
  //arrays
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    }
    return array.slice(0, n);
  }

  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(-n);
  }

  



  //sorting trial
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      let valA = callback(a);
      let valB = callback(b);
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    });
  }
  

  //flatten trial
  function myFlatten(array, shallow = false, newArr = []) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        if (shallow) {
          newArr.push(...array[i]);
        } else {
          myFlatten(array[i], shallow, newArr);
        }
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  
  //keys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  //values
  function myValues(object) {
    return Object.values(object);
  }
  
