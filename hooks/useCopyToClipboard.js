import { copyToClipboard as copy } from "utility/helpers";

export const useCopyToClipboard = () => {
  const copyToClipboard = (text, element) => {
    copy(text);
    element.setAttribute("uk-tooltip", "copied");
    setTimeout(() => {
      window.UIkit.tooltip(element).show();
    }, 50);
    setTimeout(() => {
      element.setAttribute("uk-tooltip", "copy");
    }, 1000);
  };

  return { copyToClipboard };
};
