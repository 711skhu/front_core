const EnumFactory = {
  makeEnum: function (objects, methods) {
    let result = {};
    let values = [];

    for (let object in objects) {
      for (let method in methods) {
        objects[object][method] = methods[method];
      }

      objects[object].toString || (objects[object].toString = () => object);
      objects[object].name = object;

      let property = Object.freeze(objects[object]);

      result[object] = property;
      values.push(property);
    }

    result.valueOf = function (value) {
      return this[value] || null;
    };

    result.values = values;

    return Object.freeze(result);
  }
};

export default EnumFactory;
