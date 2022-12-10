const viewMoreBtn = document.getElementById("view-more-btn");
const blogsHidden = document.querySelectorAll(".hide");

window.onload = function() {
    blogsHidden.forEach(function(blog) {
        blog.style.display = "none"
    })
}

viewMoreBtn.addEventListener("click", function () {
    blogsHidden.forEach(function(blog) {
      if (blog.style.display === "none") {
        blog.style.display = "block"
        viewMoreBtn.textContent = "Hide More"
      } else {
        blog.style.display = "none"
        viewMoreBtn.textContent = "View More"
      }
    })

});
