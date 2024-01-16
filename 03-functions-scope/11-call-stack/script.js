// Mở tab 'nguồn' và đặt điểm dừng ở hàm đầu tiên ()

// Ví dụ 1

// function first() {
//     console.log('first...');
//   }
  
//   function second() {
//     console.log('second...');
//   }
  
//   function third() {
//     console.log('third...');
//   }
  
//   first();
//   second();
//   third();
  
  // Ví dụ 2
  
  function first() {
    console.log('first...');
    second();
  }
  
  function second() {
    console.log('second...');
    third();
  }
  
  function third() {
    console.log('third...');
  }
  
  first();