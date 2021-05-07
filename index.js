const convertToCamelCase = require('./convertToCamelCase');

const testSentence1 = 'the-stealth-warrior';
const testSentence2 = 'The_Stealth_Warrior';

console.log(convertToCamelCase(testSentence1));

console.log(convertToCamelCase(testSentence2));
