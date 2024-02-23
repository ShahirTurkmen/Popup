// JavaScript to handle the popup functionality
const uploadButton = document.getElementById("uploadButton");
const popup = document.getElementById("popup");
const stockImagesButton = document.getElementById("stockImagesButton");
const storageButton = document.getElementById("storageButton");
const uploadImagesButton = document.getElementById("uploadImagesButton");
const storageArea = document.querySelector(".storage-area");
const popupStorageArea = document.getElementById("popupStorageArea");
const uploadMessage = document.getElementById("uploadMessage");
const closeButton = document.getElementById("closeButton");


function audio(src) {
    const audio = new Audio(src);
    audio.play();
}
function apperstockImages() {
    popupStorageArea.innerHTML = ""; // Clear existing images

    const stockImageUrls = [
        "./images/1.webp",
        "./images/2.webp",
        "./images/3.webp",
        "./images/4.webp",
        "./images/5.webp",
        "./images/6.webp",
        "./images/7.webp",
        "./images/8.webp",
        "./images/normal.png",
        // Add more stock image URLs as needed
    ];

    stockImageUrls.forEach(function (url) {
        const imageElement = document.createElement("img");
        imageElement.src = url;
        imageElement.classList.add("storage-image");
        popupStorageArea.appendChild(imageElement);
    });
}

uploadButton.addEventListener("click", function () {
    popup.style.display = "flex";
    audio('./utils/navigate.mp3');

});

closeButton.addEventListener("click", function () {
    popup.style.display = "none";
    audio('./utils/navigate.mp3');
});

stockImagesButton.addEventListener("click", function () {
    // Handle stock images button click
    console.log("Stock Images button clicked");
    // Add your custom functionality here
    // Example: Add stock images to the popup storage area
    apperstockImages();
    audio('./utils/navigate.mp3');
});

apperstockImages();


storageButton.addEventListener("click", function () {
    // Handle storage button click
    console.log("Storage button clicked");
    audio('./utils/navigate.mp3');
    // Add your custom functionality here
    // Example: Add sample images to the storage area
    storageArea.innerHTML = ""; // Clear existing images

    const imageUrls = [
        "./images/1.webp",
        "./images/2.webp",
        "./images/3.webp",
        "./images/4.webp",
        "./images/5.webp",
        "./images/6.webp",
        "./images/7.webp",
        "./images/8.webp",
        "./images/wordpad.webp",
        // Add more image URLs as needed
    ];

    imageUrls.forEach(function (url) {
        const imageElement = document.createElement("img");
        imageElement.src = url;
        imageElement.classList.add("storage-image");
        storageArea.appendChild(imageElement);
    });
});

uploadImagesButton.addEventListener("click", function () {
    // Handle upload images button click
    console.log("Upload Images button clicked");
    // Add your custom functionality here
    // Example: Trigger file upload dialog
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.multiple = true;
    fileInput.accept = '.jpg, .png, .svg, .jpeg';
    fileInput.addEventListener("change", function (event) {
        const selectedFiles = Array.from(event.target.files);
        console.log("Selected files:", selectedFiles);

        // Add uploaded images to the popup storage area
        selectedFiles.forEach(function (file) {
            const reader = new FileReader();
            reader.onload = function () {
                const imageUrl = reader.result;
                const imageElement = document.createElement("img");
                imageElement.src = imageUrl;
                imageElement.classList.add("storage-image");
                popupStorageArea.appendChild(imageElement);
                const message = document.createElement("div");
                audio('./utils/ding.mp3');
                message.innerHTML = `Image uploaded successfully`;
                message.classList.add("message");
                popupStorageArea.insertAdjacentElement("beforebegin", message);
                setTimeout(() => {
                    message.remove();
                }, 2000);
            };
            reader.readAsDataURL(file);
        });
    });
    fileInput.click();
});