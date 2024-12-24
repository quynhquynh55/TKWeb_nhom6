
// Lấy tất cả các hình ảnh trong danh sách sản phẩm
const productImages = document.querySelectorAll('.product-item img');

// Lặp qua mỗi hình ảnh và thêm sự kiện click
productImages.forEach((image) => {
    image.addEventListener('click', () => {
        // Nếu ảnh đã được zoom, bỏ zoom
        if (image.classList.contains('zoom')) {
            image.classList.remove('zoom');
        } else {
            // Zoom ảnh
            image.classList.add('zoom');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Chức năng zoom ảnh
    const productImages = document.querySelectorAll('.product-item img');
    productImages.forEach((image) => {
        image.addEventListener('click', () => {
            image.classList.toggle('zoom');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-and-go');
    const cartItemCount = document.querySelector('.cart-icon span');
    const cartItemList = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const cartIcon = document.querySelector('.cart-icon');
    const sidebar = document.querySelector('.sidebar');

    let cartItems = [];
    let totalAmount = 0;

    // Thêm sự kiện cho nút "Thêm vào giỏ hàng"
    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const productElement = button.closest('.product-item');
            const item = {
                name: productElement.querySelector('h3').textContent,
                price: parseFloat(
                    productElement.querySelector('.price').textContent.split(' ')[0].replace('.', '')
                ),
                quantity: 1,
            };

            const existingItem = cartItems.find((cartItem) => cartItem.name === item.name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cartItems.push(item);
            }
            totalAmount += item.price;

            updateCartUI();
        });
    });

    function updateCartUI() {
        updateCartItemCount(cartItems.length);
        updateCartItemList();
        updateCartItemTotal();
    }

    function updateCartItemCount(count) {
        cartItemCount.textContent = count;
    }

    function updateCartItemList() {
        cartItemList.innerHTML = ''; // Xóa danh sách cũ

        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item', 'individual-cart-item');
            cartItem.innerHTML = `
                <span>${item.quantity} x ${item.name} - ${item.price.toLocaleString()} VNĐ</span>
                <button class="remove-btn" data-index="${index}">
                    <i class="bi bi-x-circle"></i>
                </button>
            `;
            cartItemList.appendChild(cartItem);
        });

        // Thêm sự kiện xóa sản phẩm
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                const index = event.target.closest('button').dataset.index;
                removeItemFromCart(index);
            });
        });
    }

    function removeItemFromCart(index) {
        const removedItem = cartItems.splice(index, 1)[0];
        totalAmount -= removedItem.price * removedItem.quantity;
        updateCartUI();
    }

    function updateCartItemTotal() {
        cartTotal.textContent = `${totalAmount.toLocaleString()} VNĐ`;
    }
    
    // Mở và đóng sidebar
    cartIcon.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    const closeButton = document.querySelector('.sidebar-close');
    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
});
// Hiển thị popup
window.onload = function () {
    const popup = document.getElementById("discount-popup");
    const closeBtn = document.querySelector(".close-btn");
    const shopNowBtn = document.querySelector(".shop-now-btn");

    // Hiển thị popup sau 2 giây
    setTimeout(() => {
        popup.classList.add("active");
    }, 2000);

    // Đóng popup khi nhấn vào nút đóng
    closeBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    });

    // Đóng popup khi nhấn vào nút "Mua ngay" (tùy chọn)
    shopNowBtn.addEventListener("click", () => {
        popup.classList.remove("active");
    });
};
