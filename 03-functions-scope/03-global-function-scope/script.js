// 'window' is globally scoped
// alert('Hello');
// console.log(innerWidth);

// Global scope variable
const x = 100;

console.log(x, 'in global');

function run() {
  // Truy cập các biến toàn cục trong hàm
  console.log(window.innerHeight);
  console.log(x, 'in function');
}

run();

// Truy cập các vars toàn cục theo khối
if (true) {
  console.log(x, 'in block');
}

function add() {
// Ghi đè x toàn cục (làm mờ biến)
  const x = 1;
  const y = 50;
  console.log(x + y);
}

// Không thể truy cập biến phạm vi hàm trong phạm vi toàn cục
console.log(y);

add();