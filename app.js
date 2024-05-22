document.addEventListener("DOMContentLoaded", function () {
    const categories = ["all", "salads", "desserts", "sauces", "drinks"];
    let currentIndex = 0;

    const categoryList = document.getElementById("categoryList");
    const imageGrid = document.getElementById("imageGrid");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const close = document.querySelector(".close");

    // Event listener for category click
    categoryList.addEventListener("click", function (e) {
        if (e.target && e.target.nodeName === "LI") {
            document.querySelectorAll(".sidebar ul li").forEach(li => {
                li.classList.remove("active");
            });
            e.target.classList.add("active");
            const selectedCategory = e.target.getAttribute("data-category");
            filterImages(selectedCategory);
        }
    });

    // Filter images based on category
    function filterImages(category) {
        const images = document.querySelectorAll(".gallery-item");
        images.forEach(img => {
            img.style.display = (category === "all" || img.getAttribute("data-category") === category) ? "block" : "none";
        });
    }

    // Open lightbox
    function openLightbox(e) {
        currentIndex = Array.from(imageGrid.children).indexOf(e.target);
        lightbox.style.display = "block";
        lightboxImage.src = e.target.src;
    }

    // Close lightbox
    close.addEventListener("click", function () {
        lightbox.style.display = "none";
    });

    // Navigate lightbox images
    prev.addEventListener("click", function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : imageGrid.children.length - 1;
        lightboxImage.src = imageGrid.children[currentIndex].src;
    });

    next.addEventListener("click", function () {
        currentIndex = (currentIndex < imageGrid.children.length - 1) ? currentIndex + 1 : 0;
        lightboxImage.src = imageGrid.children[currentIndex].src;
    });

    // Add event listener to images for opening lightbox
    const images = document.querySelectorAll(".gallery-item");
    images.forEach(img => {
        img.addEventListener("click", openLightbox);
    });
});
