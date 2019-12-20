# React Card Brand
> A zero-dependency React Hook to show the brand from a card type.

## Installation
```sh
$ npm i -S react-card-brand
```

or install with Yarn if you prefer:
```sh
yarn add react-card-brand
```

## Usage
You can import `useCardBrand` into your component and use the `getSvgProps` callback to get a current brand from your card type.

```js
import React from 'react';
import { useCardBrand } from 'react-card-brand';
import images from 'react-card-brand/images';

export default function Example() {
  const { getSvgProps } = useCardBrand();

  return (
    <div>
      <svg {...getSvgProps({ type: "visa", images })} />
    </div>
  );
}
```


## Community
All feedback and suggestions are welcome!

## License
This is a open-source software licensed under the [MIT license](https://raw.githubusercontent.com/coderdiaz/react-card-brand/master/LICENSE)