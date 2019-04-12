export function validate(themes, theme) {
  let valid = themes.indexOf(theme) !== -1;
  if (!valid) {
    console.log("테마에 " + value + "가 없습니다.");
  }
  return valid;
}
