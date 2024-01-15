let x;

// Tạo một đối tượng
const nguoi = {
  ten: 'Hung',
  tuoi: 30,
  laQuanTriVien: true,
  diaChi: {
    duong: 'Vân canh',
    thanhPho: 'Boston',
    tinh: 'MA',
  },
  soThich: ['Ngủ', 'Game'],
};

// Truy cập các thuộc tính của đối tượng
x = nguoi.ten; // Dot notation
x = nguoi['tuoi']; // Bracket notation
x = nguoi.diaChi.tinh;
x = nguoi.soThich[0];

// Cập nhật các thuộc tính
nguoi.ten = 'Dino';
nguoi['laQuanTriVien'] = false;

// Xóa các thuộc tính
delete nguoi.tuoi;

// Tạo các thuộc tính mới
nguoi.coCon = true;

// Thêm các hàm
nguoi.gioiThieu = function () {
  console.log(`Xin chào, tôi tên là ${this.ten}`);
};

nguoi.gioiThieu();

// Khóa với nhiều từ
const nguoi2 = {
  'ten đầu': 'Dino',
  'ten cuối': 'Hu',
};

x = nguoi2['ten đầu'];

console.log(x);
