export const phoneInputHandler = (evt) => {
  if (evt.target.value.length > 11)
    evt.target.value = evt.target.value.substr(0, 10);
  evt.target.value = evt.target.value
    .replace(/[^0-9]/g, "")
    .replace(/(\..*)\./g, "$1");
};

export const numberInputHandler = (evt) => {
  evt.target.value = evt.target.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1");
};

export const digitInputHandler = (evt, allowed = 10e10) => {
  const value = (evt.target.value = evt.target.value.replace(/[^0-9]/g, ""));
  evt.target.value = value.replace(/(\..*)\./g, "$1").substr(0, allowed);
};

export const getRandomNumber = (length) =>
  Math.floor(
    Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  );

export const to2DP = (num = 0) => {
  return Math.round((parseFloat(num) + Number.EPSILON) * 100) / 100;
};

export const noop = () => {};

export function debounce(callback, wait) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(function () {
      callback.apply(context, args);
    }, wait);
  };
}

export const compose = (...functions) => (args) =>
  functions.reduceRight((arg, fn) => fn(arg), args);

export const queryString = (obj) =>
  "?" +
  Object.keys(obj)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join("&");
