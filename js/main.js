const PHOTOS_AMOUNT = 25;

const getRandomPositiveInteger = (a, b) => {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// const checkStringLength = (string, length) => string.length <= length;

let counter = 0;

const createPhotoDescription = () => {
  counter++;

  return {
    id: counter,
    url: `photos/${counter}.jpg`,
    description: 'Умиротворяющий пейзаж',
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomPositiveInteger(0, 200)
  };
};

const photosDescriptions = Array.from({length: PHOTOS_AMOUNT}, createPhotoDescription);
console.log(photosDescriptions);
