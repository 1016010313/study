/**
 * 根据表达式计算字母数
 * 说明：
 *   给定一个描述字母数量的表达式，计算表达式里的每个字母实际数量
 *   表达式格式：
 *     字母紧跟表示次数的数字，如 A2B3
 *     括号可将表达式局部分组后跟上数字，(A2)2B
 *     数字为1时可缺省，如 AB3。
 * 示例：
 *   countOfLetters('A2B3'); // { A: 2, B: 3 }
 *   countOfLetters('A(A3B)2'); // { A: 7, B: 2 }
 *   countOfLetters('C4(A(A3B)2)2'); // { A: 14, B: 4, C: 4 }
 */

// leetcode 困难题

function countOfAtoms(formula) {
  let stack = []
}

console.log(countOfAtoms('A2B3')) // { A: 2, B: 3 }
console.log(countOfAtoms('A(A3B)2')) // { A: 7, B: 2 }
console.log(countOfAtoms('C4(A(A3B)2)2')) // { A: 14, B: 4, C: 4 }