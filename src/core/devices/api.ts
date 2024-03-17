export const waitALittle = async () => {
  await fetch('http://httpbin.org/delay/4');
};
