import * as React from 'react';
import { getCardBrand } from './utils/validation';

interface UseCardBrandProps {
  images?: {
    [key: string]: React.ReactNode | JSX.Element;
  };
  cardNumber?: string;
  ariaLabel?: string;
}

export default function useCardBrand() {
  const getSvgProps = React.useCallback((props: UseCardBrandProps = {}) => {
    const images = props.images ?? {};
    const type = 'placeholder';

    return React.useMemo(
      () => ({
        'aria-label': props.ariaLabel ?? 'Placeholder card',
        children: images[type] || images,
        width: '1.5em',
        height: '1em',
        viewBox: '0 0 24 16',
        ...props,
      }),
      [props],
    );
  }, []);

  return {
    getSvgProps,
    getCardBrand,
  };
}
