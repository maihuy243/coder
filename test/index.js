let index = 0;
const arr = [1, 2, 3, 4];
let total = 0;

(function deQuy() {
  console.log(total);
  total += arr[index];
  if (index < arr.length) {
    index++;
    deQuy();
  }
})(arr);
