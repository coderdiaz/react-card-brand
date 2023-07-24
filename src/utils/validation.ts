enum CardType {
  Visa = 'visa',
  Mastercard = 'mastercard',
  Amex = 'amex',
  Diners = 'diners',
  Discover = 'discover',
}

type CardTypeConfig = { size: number[]; prefixes: string[] };
type CardTypes = { [key in CardType]: CardTypeConfig };

const options: CardTypes = {
  visa: { size: [13, 16], prefixes: ['4'] },
  mastercard: { size: [16], prefixes: ['51', '52', '53', '54', '55'] },
  amex: { size: [15], prefixes: ['34', '37'] },
  diners: {
    size: [14],
    prefixes: ['300', '301', '302', '303', '304', '305', '36', '38'],
  },
  discover: {
    size: [16],
    prefixes: ['6011', '644', '645', '646', '647', '648', '649', '65'],
  },
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
  const validateCode = formattedNumber.substring(0, 4); // Getting the first four gits of the card number

  for (const [option, config] of Object.entries(options)) {
    const { size, prefixes } = config;
    if (size.includes(formattedNumber.length)) {
      const testCard = new RegExp(`^(${prefixes.join('|')})`);
      if (testCard.test(validateCode)) {
        return option;
      }
    }
  }

  return 'placeholder';
};
