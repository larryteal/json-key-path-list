module.exports = jsonKeyPath;

function isObject(obj) {
 const type = Object.prototype.toString.call(obj);
 if (type === '[object Object]' || type === '[object Array]') {
   return true;
 }
 return false;
}

function jsonKeyPath(obj) {
  if (!isObject(obj)) {
    return [];
  }
  const keys = Object.keys(obj);
  const keyPath = [];
  keys.forEach(key => {
    const item = obj[key];
    const subKeyPath = jsonKeyPath(item);
    if (subKeyPath.length > 0) {
      subKeyPath.forEach(sp => {
        keyPath.push(`${key}.${sp}`);
      });
    } else {
      keyPath.push(key);
    }
  });
  return keyPath;
}