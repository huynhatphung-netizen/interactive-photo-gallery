function upDate(previewPic) {
    console.log("Sự kiện upDate đã được kích hoạt!");
    console.log("Mô tả (alt): " + previewPic.alt);
    console.log("Đường dẫn (src): " + previewPic.src);

    let mainImage = document.getElementById("image");
    mainImage.innerHTML = previewPic.alt;
    mainImage.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("Sự kiện undo đã kích hoạt!");
    
    let mainImage = document.getElementById("image");
    mainImage.style.backgroundImage = "url('')";
    mainImage.innerHTML = "Hover over an image below to display here.";
}
