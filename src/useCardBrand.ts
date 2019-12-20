import * as React from "react";

export default function useCardBrand() {
  const getSvgProps = React.useCallback((props = {}) => {
    const images = props.images || {};
    return {
      "aria-label": props.ariaLabel ? props.ariaLabel : "Placeholder card",
      "children": images[props.type ? props.type : "placeholder"] || images.placeholder,
      "width": "1.5em",
      "height": "1em",
      "viewBox": "0 0 24 16",
      ...props,
    };
  }, []);

  return {
    getSvgProps,
  };
}
