const getRandomNumber = (min, max) => {
  if (
    typeof min === 'number' &&
    typeof max === 'number' &&
    min >= 0 && max >= 0 &&
    min < max
  ) {
    return min + Math.random() * (max - min);
  }

  return NaN;
};

console.log(getRandomNumber(200, 400));

const checkMaxStringLength = (string, limit) => string.length <= limit;

console.log(checkMaxStringLength('hello', 5));
