const x = 100;

// Câu lệnh If là một khối
if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y);
}

// console.log(y); // ReferenceError: y is not defined

//Một vòng lặp 
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError: i is not defined

// Using var
if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c);

//phạm vi chức năng var IS
function run() {
  var d = 100;
  console.log(d);
}

run();

// console.log(d);


const foo = 1;
var bar = 2; // Đặt đối tượng cửa sổ