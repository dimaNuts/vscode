let result = 3;
// на одну итерацию больше, если приращение в консоли
while (result < 10000) {
  console.log((result *= 3));
}

for (let result = 3; result < 10000; result *= 3) {
  console.log(result);
}
