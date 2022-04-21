const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function openFullImg(photo) {
  fullImgBox.style.display = "flex";
  fullImg.src = photo;
}