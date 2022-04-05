const flatten = (obj, path = "") => {
  if (!(obj instanceof Object)) return { [path.replace(/\.$/g, "")]: obj };

  return Object.keys(obj).reduce((output, key) => {
    return obj instanceof Array
      ? { ...output, ...flatten(obj[key], path + "[" + key + "].") }
      : { ...output, ...flatten(obj[key], path + key + ".") };
  }, {});
};

const flattenFunctions = (obj) => {
  if (obj.hasOwnProperty("function")) return obj.function;
};

const test = [{ test: "test" }, { test2: "test2" }];

console.log(test.map((e) => e));
