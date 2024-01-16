// Cú pháp IIFE (Có phạm vi riêng và chạy ngay)
(function () {
  const user = 'John';
  console.log(user);
  const hello = () => console.log('Hello from the IIFE');
  hello();
})();

// Params
(function (name) {
  console.log('Hello ' + name);
})('Shawn');

// Được đặt tên là IIFE (Chỉ có thể gọi đệ quy)
(function hello() {
  console.log('Hello');
})();