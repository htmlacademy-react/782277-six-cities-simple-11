export const formatFirstLetter = (text: string): string =>
  text.charAt(0).toUpperCase() + text.slice(1);

export const formatDate = (date: string, locales = 'en-US'): string =>
  new Date(date).toLocaleString(locales, {month: 'long', year: 'numeric'});

export const calculateRatingWidth = (currentRating: number, maxRating = 5): string =>
  `${Math.round(currentRating) / maxRating * 100}%`;

export const getRandomPositiveInteger = (a: number, b: number): number => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const getRandomNumberOfElements = (elements: string[], number = 6): string[] => {
  if (elements.length <= number) {
    return elements;
  }

  const randomElements: string[] = [];

  while (randomElements.length < number) {
    const randomElement = elements[getRandomPositiveInteger(0, elements.length - 1)];

    if (!randomElements.includes(randomElement)) {
      randomElements.push(randomElement);
    }
  }

  return randomElements;
};
