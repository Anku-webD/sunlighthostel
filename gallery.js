const imgs = document.getElementsByClassName('modal-images');
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modal-image");
const closebtn = document.getElementById("closebtn");
for (x in imgs) {
    imgs[x].addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        console.log('okay');
    })

    closebtn.addEventListener('click', function() {
        modal.style.display = "none";
    })
}