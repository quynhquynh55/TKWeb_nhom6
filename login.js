<script>
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.querySelector('form');
        
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Ngừng hành động mặc định của form (gửi yêu cầu)
            
            // Lấy giá trị từ các ô nhập
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Kiểm tra thông tin đăng nhập (Ví dụ: admin@example.com, password123)
            if (email === 'admin@example.com' && password === 'password123') {
                // Nếu đúng, chuyển hướng về trang chủ
                window.location.href = 'index.html'; // Đường dẫn trang chủ
            } else {
                // Nếu sai, thông báo lỗi
                alert('Thông tin đăng nhập không đúng!');
            }
        });
    });
</script>
