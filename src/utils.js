const getRandom = (min = 0, max = 99) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandom;
