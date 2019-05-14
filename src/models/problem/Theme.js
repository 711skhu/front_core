const Theme = Object.freeze({
  DARK: Object.freeze({
    ace: "dracula",
    value: "dark",
    toString() {
      return this.value
    }
  }),
  LIGHT: Object.freeze({
    ace: "chrome",
    value: "light",
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

export default Theme;
