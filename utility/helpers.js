export const phoneInputHandler = (evt) => {
  if (evt.target.value.length > 11)
    evt.target.value = evt.target.value.substr(0, 10);
  evt.target.value = evt.target.value
    .replace(/[^0-9]/g, "")
    .replace(/(\..*)\./g, "$1");
};

export const numberInputHandler = (evt) => {
  evt.target.value = evt.target.value
    .replace(/[^-0-9.]/g, "")
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

export const warningAlert = ({
  message = "You're all caught up.",
  status = "danger",
}) => {
  window.UIkit.notification({
    message: `<div class='uk-text-center uk-text-small'>${message}</div>`,
    status,
  });
};

export function copyToClipboard(text) {
  if (window.clipboardData && window.clipboardData.setData) {
    // Internet Explorer-specific code path to prevent textarea being shown while dialog is visible.
    return window.clipboardData.setData("Text", text);
  } else if (
    document.queryCommandSupported &&
    document.queryCommandSupported("copy")
  ) {
    var textarea = document.createElement("textarea");
    textarea.textContent = text;
    textarea.style.position = "fixed"; // Prevent scrolling to bottom of page in Microsoft Edge.
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand("copy"); // Security exception may be thrown by some browsers.
    } catch (ex) {
      console.warn("Copy to clipboard failed.", ex);
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
  }
}
