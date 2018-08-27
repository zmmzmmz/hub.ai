const nodejieba = require('nodejieba');

nodejieba.load();

const sentence = '学机修美容理发，学挖掘机哪家强，中国山东找蓝翔';
let topN = 4
let res = nodejieba.extract(sentence, topN)

console.log(res)

res = nodejieba.tag(sentence)
console.log(res)

res = nodejieba.cutHMM(sentence)

console.log(res)

res = nodejieba.cut(sentence)
console.log(res)
