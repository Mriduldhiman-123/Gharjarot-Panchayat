let images = ["photo1.jpg", "photo2.jpg", "photo3.jpg"]; // Replace with actual image filenames
let index = 0;

function openGallery() {
    document.getElementById("gallery").classList.remove("hidden");
    document.getElementById("gallery-img").src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("gallery-img").src = images[index];
}
