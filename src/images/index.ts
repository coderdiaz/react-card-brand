import amex from './amex.js';
import diners from './diners.js';
import discover from './discover.js';
import hipercard from './hipercard.js';
import jcb from './jcb.js';
import unionpay from './unionpay.js';
import mastercard from './mastercard.js';
import unknown from './unknown.js';
import visa from './visa.js';
import { CardType } from '../utils/validation.js';

export default {
  amex,
  diners,
  discover,
  hipercard,
  jcb,
  unionpay,
  mastercard,
  unknown,
  visa,
} as { [key in CardType]: React.ReactNode | JSX.Element };
