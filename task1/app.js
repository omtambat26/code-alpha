var images = [
    "image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg",
    "image6.jpg", "image7.jpg", "image8.jpg", "image9.jpg", "image10.jpg",
    "image11.jpg", "image12.jpg", "image13.jpg", "image14.jpg"
];
var currentImageIndex = 0;
var modalImg = document.getElementById("modalImg");

function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    modalImg.src = imageSrc;
    currentImageIndex = images.indexOf(imageSrc);
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentImageIndex];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImg.src = images[currentImageIndex];
}
function openPage(url) {
    window.location.href = url;
}