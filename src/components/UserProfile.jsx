// Nhận biến 'props' ở trong ngoặc
function UserProfile(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      {/* Dùng props.ten_thuoc_tinh để lấy dữ liệu */}
      <h3>Tên: {props.name}</h3>
      <p>Nghề nghiệp: {props.job}</p>
    </div>
  );
}

export default UserProfile;
