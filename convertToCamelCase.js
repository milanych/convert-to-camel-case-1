module.exports = (sentence) => {
  let sum = [];
  let result = sentence.split(/-|_/);
  sum.push(result[0]);
  for (let i = 1; i <= result.length-1; i+=1) {
      sum.push(result[i][0].toUpperCase() + result[i].slice(1));
  }
  return sum.join('');
};
