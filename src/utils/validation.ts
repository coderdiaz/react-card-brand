enum CardType {
  Amex = 'amex',
  Diners = 'dinersclub',
  Discover = 'discover',
  Jcb = 'jcb',
  Mastercard = 'mastercard',
  Unionpay = 'unionpay',
  Visa = 'visa',
}

type CardTypeConfig = { size: number[]; prefixes: string[] };
type CardTypes = { [key in CardType]: CardTypeConfig };

const options: CardTypes = {
  amex: { size: [15], prefixes: ['34', '37'] },
  dinersclub: {
    size: [14],
    prefixes: ['300', '301', '302', '303', '304', '305', '36', '38'],
  },
  discover: {
    size: [16],
    prefixes: ['6011', '644', '645', '646', '647', '648', '649', '65'],
  },
  jcb: {
    size: [16],
    prefixes: ['3528', '3529', '353', '354', '355', '356', '357', '358'],
  },
  mastercard: { size: [16], prefixes: ['51', '52', '53', '54', '55'] },
  unionpay: {
    size: [16, 17, 18, 19],
    prefixes: [
      '622126',
      '622127',
      '622128',
      '622129',
      '62213',
      '62214',
      '62215',
      '62216',
      '62217',
      '62218',
      '62219',
      '6222',
      '6223',
      '6224',
      '6225',
      '6226',
      '6227',
      '6228',
      '62290',
      '62291',
      '622920',
      '622921',
      '622922',
      '622923',
      '622924',
      '622925',
    ],
  },
  visa: { size: [13, 16], prefixes: ['4'] },
};

/**
 * Returns the card type based on the card number
 * Accepts different formats of card number:
 * - 4242 4242 4242 4242
 * - 4242-4242-4242-4242
 * - 4242424242424242
 * @param cardNumber {string} - The card number to be validated
 * @returns The card type name
 */
export const getCardBrand = (cardNumber: string) => {
  const formattedNumber = cardNumber.replace(/[ -]/g, ''); // Removing spaces from the card number

  for (const [option, config] of Object.entries(options)) {
    const { size, prefixes } = config;
    if (size.includes(formattedNumber.length)) {
      const testCard = new RegExp(`^(${prefixes.join('|')})`);
      if (testCard.test(formattedNumber)) {
        return option;
      }
    }
  }

  return 'placeholder';
};
