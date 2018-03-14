// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
	return propertyName;
};

const createNotEnumerableProperty = (propertyName) => {
	return Symbol(propertyName);
};

const createProtoMagicObject = () => {
	let temp = new Function;
  temp.prototype = Function.__proto__;
  return temp;
};

const incrementor = () => {
	if (!incrementor.counter) incrementor.counter = 0;
	function f() {
		incrementor.counter++;
		return f;
	}
	f.valueOf = function() {
		return incrementor.counter;
	}
	incrementor.counter++;
	return f;
};

const asyncIncrementor = () => {
	if (!asyncIncrementor.counter) asyncIncrementor.counter = 0;
  return new Promise((resolve, reject) => {
    resolve(++asyncIncrementor.counter);
  });
};

const createIncrementer = function *() {
	for(let i = 1; i < 7; i++) {
    yield i;
  }
  // let counter = 0;
  // let obj = {
  //   next: function() {
  //     ++counter;
  //     return {
  //       value: counter
  //     };
  //   }
  // };
  // obj[Symbol.iterator] = function* () {
  //   yield 4;
  //   yield 5;
  //   yield 6;
  // };
  // return obj;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(param);
    }, 1000);
  });
};

const getDeepPropertiesCount = (obj) => {
  let counter = 0;

  function rec(obj){
    for (key in obj){
      counter++;
      rec(obj[key]);
    }
  }

  rec(obj);
  return counter;
};

const createSerializedObject = () => {
  return null;
};

const toBuffer = () => {};

const sortByProto = (arr) => {
  return arr;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;