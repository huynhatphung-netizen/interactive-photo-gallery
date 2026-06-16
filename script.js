window.onload = function() {
    addTabFocus();
};

function addTabFocus() {
    console.log("addTabFocus triggered");
    let images = document.getElementsByClassName("preview");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Tabindex added to image " + (i + 1));
    }
}

function upDate(previewPic) {
    console.log("upDate triggered");
    console.log("Alt: " + previewPic.alt);
    console.log("Src: " + previewPic.src);

    let mainImage = document.getElementById("image");
    mainImage.innerHTML = previewPic.alt;
    mainImage.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    console.log("undo triggered");
    let mainImage = document.getElementById("image");
    mainImage.style.backgroundImage = "url('')";
    mainImage.innerHTML = "Hover over an image or use the Tab key to explore.";
}
