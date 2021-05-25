# json-key-path-list
  Generate json key path list.
# Usage
  ```js
    const jsonKeyPathList = require('json-key-path-list');

    const jsonObj = {
      foo: 'foov',
      bar: {
        b: 'b',
        a: 'a',
        r: 'r'
      },
      ward: [{
        w: 'w1',
        d: 'd1'
      }, {
        w: 'w2',
        d: 'd2'
      }]
    };

    const keyPathList = jsonKeyPathList(jsonObj);

    console.log(keyPathList);
    // ["foo", "bar.b", "bar.a", "bar.r", "ward.0.w", "ward.0.d", "ward.1.w", "ward.1.d"]
  ```
