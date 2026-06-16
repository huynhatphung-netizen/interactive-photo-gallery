// 1. Thêm sự kiện onload để kích hoạt hàm khởi tạo khi trang tải xong
window.onload = function() {
    addTabFocus();
};

// 2. Hàm tự động thêm thuộc tính tabindex cho toàn bộ ảnh nhỏ
function addTabFocus() {
    // In console log để chứng minh sự kiện onload đã kích hoạt (Yêu cầu bài học)
    console.log("Sự kiện Trang web đã tải xong (onload) và hàm addTabFocus() được gọi!");

    // Lấy danh sách tất cả các phần tử có class là 'preview'
    let images = document.getElementsByClassName("preview");

    // Viết vòng lặp FOR để duyệt qua từng bức ảnh một
    for (let i = 0; i < images.length; i++) {
        // Gán thuộc tính tabindex = 0 để ảnh đó có thể nhận focus từ bàn phím
        images[i].setAttribute("tabindex", "0");
        console.log("Đã thêm thành công tabindex cho ảnh số " + (i + 1));
    }
}

// 3. Hàm xử lý khi Di chuột vào HOẶC khi nhấn phím Tab trúng ảnh (Focus)
function upDate(previewPic) {
    console.log("Sự kiện hiển thị ảnh kích hoạt!");
    console.log("Alt text: " + previewPic.alt);
    console.log("Source URL: " + previewPic.src);

    let mainImage = document.getElementById("image");
    mainImage.innerHTML = previewPic.alt;
    mainImage.style.backgroundImage = "url('" + previewPic.src + "')";
}

// 4. Hàm xử lý khi Di chuột ra HOẶC khi nhấn Tab chuyển sang ảnh khác (Blur)
function undo() {
    console.log("Sự kiện khôi phục ảnh kích hoạt!");

    let mainImage = document.getElementById("image");
    mainImage.style.backgroundImage = "url('')";
    mainImage.innerHTML = "Hover over an image below or use Tab key to display here.";
}
