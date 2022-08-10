export function getErrorMessage(errors) {
  return [...Object.keys(errors)].map((key) => errors[key].message)[0];
}
