// src/components/LikeButton.jsx
import { useState } from "react"; // 1. Import Hook

function LikeButton() {
  // 2. Khai báo state
  // 'liked': biến lưu trạng thái (true = đã like, false = chưa)
  // 'setLiked': hàm để thay đổi trạng thái
  const [liked, setLiked] = useState(false);

  // Thêm một state đếm số lượng
  const [count, setCount] = useState(0);

  // Hàm xử lý khi bấm nút
  const handleClick = () => {
    setLiked(!liked); // Đảo ngược trạng thái (True -> False và ngược lại)

    if (liked === false) {
      setCount(count + 1); // Nếu chưa like thì tăng số
    } else {
      setCount(count - 1); // Bỏ like thì giảm số
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      {/* Thay đổi màu chữ dựa trên state 'liked' */}
      <h3 style={{ color: liked ? "red" : "black" }}>
        {liked ? "❤️ Đã thả tim" : "🖤 Chưa thả tim"}
      </h3>

      <p>Like count {count}</p>

      {/* Sự kiện onClick gọi hàm handleClick */}
      <button onClick={handleClick}>{liked ? "Bỏ thích" : "Thích ngay"}</button>
    </div>
  );
}

export default LikeButton;
