const Language = Object.freeze({
  JAVA: Object.freeze({
    ace: "java",
    value: "java",
    file: "Solution.java",
    toString() {
      return this.value
    }
  }),
  JAVASCRIPT: Object.freeze({
    ace: "javascript",
    value: "javascript",
    file: "solution.js",
    toString() {
      return this.value
    }
  }),
  CPP: Object.freeze({
    ace: "c_cpp",
    value: "C++",
    file: "solution.cpp",
    toString() {
      return this.value
    }
  }),
  PYTHON: Object.freeze({
    ace: "python",
    value: "python",
    file: "solution,py",
    toString() {
      return this.value
    }
  }),
  valueOf(value) {
    for (let property in this) {
      if (this[property].value === value) {
        return this[property];
      }
    }

    return null;
  }
});



export default Language;
