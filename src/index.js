// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
    return Symbol(propertyName);
};

const createProtoMagicObject = () => {
    function Constr() { };
    let magic = new Constr;
    magic.prototype = magic.__proto__;
    return magic;
};

let counter = 0;
let incrementor = () => {
    incrementor = function () {
        counter += 1;
        return incrementor;
    };
    incrementor.toString = function () {
        return counter;
    };
    return incrementor();
};

let asyncCounter = 0;
let asyncIncrementor = () => {
    asyncCounter += 1;
    return new Promise(resolve => {
        resolve(asyncCounter);
    })
};

function* createIncrementer() {
    let index = 1;
    while (index <= 3)
        yield index++;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = param => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(param);
        }, 1000);
    })
};

const getDeepPropertiesCount = obj => {
    let count = 0;
    let object = obj;

    function addCount(object) {
        for (let key in object) {
            if (typeof (object[key]) === 'object') {
                count += 1;
                addCount(object[key])
            }
        }
        return count;
    }
    return addCount(object);
};

const createSerializedObject = () => {
    return Object('object');
};

const toBuffer = () => { };
const sortByProto = (arr) => {
    return arr.sort((a, b) => { a - b });
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