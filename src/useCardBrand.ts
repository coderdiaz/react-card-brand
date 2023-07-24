import * as React from 'react';

interface UseCardBrandProps {
  images?: {
    [key: string]: React.ReactNode | JSX.Element;
  };
  ariaLabel?: string;
  type?: string;
}

export default function useCardBrand() {
  const getSvgProps = React.useCallback((props: UseCardBrandProps = {}) => {
    const images = props.images || {};

    return React.useMemo(
      () => ({
        'aria-label': props.ariaLabel ?? 'Placeholder card',
        children: images[props.type ?? 'placeholder'] || images,
        width: '1.5em',
        height: '1em',
        viewBox: '0 0 24 16',
        ...props,
      }),
      [props.ariaLabel, props.type],
    );
  }, []);

  return {
    getSvgProps,
  };
}
