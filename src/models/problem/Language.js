const Language = Object.freeze({
  JAVA: Object.freeze({
    ace: "java",
    value: "java",
    toString() {
      return this.value
    }
  }),
  JAVASCRIPT: Object.freeze({
    ace: "javascript",
    value: "javascript",
    toString() {
      return this.value
    }
  }),
  CPP: Object.freeze({
    ace: "c_cpp",
    value: "C++",
    toString() {
      return this.value
    }
  }),
  PYTHON: Object.freeze({
    ace: "python",
    value: "python",
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
