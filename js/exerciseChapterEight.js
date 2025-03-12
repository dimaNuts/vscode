/**
 * total two digits
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */

function add(num1, num2) {
  return num1 + num2;
}

/**
 * product two didits
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
function multiply(num1, num2) {
  return num1 * num2;
}

let result = add(multiply(36325, 9824), 777);
console.log(result);

/**
 * check array are same
 * @param {[]} arr1
 * @param {[]} arr2
 * @returns true || false
 */
function areArraySame(arr1, arr2) {
  let lenArr1 = arr1.length;
  let lenArr2 = arr2.length;
  let flag = true;
  if (lenArr1 !== lenArr2) {
    return false;
  } else {
    for (let i = 0; i < lenArr1; i++) {
      if (arr1[i] !== arr2[i]) {
        flag = false;
      }
    }
  }
  return flag;
}

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

alert(areArraySame(arr1, arr2));
