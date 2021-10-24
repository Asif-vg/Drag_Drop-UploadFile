let dragArea = document.querySelector(".drag-area"),
    dragText = dragArea.querySelector("header"),
    button = dragArea.querySelector("button"),
    input = dragArea.querySelector("input");
let file;

button.addEventListener("click", () => {
    input.click();
})

input.addEventListener("change", function() {
    file = this.files[0];
    showFile();
    dragArea.classList.add("active");
})


dragArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dragArea.classList.add("active");
    dragText.textContent = "Release to Upload File";
})

dragArea.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dragArea.classList.remove("active");
    dragText.textContent = "Drag and Drop to Upload File";
})

dragArea.addEventListener("drop", (e) => {
    e.preventDefault();

    file = e.dataTransfer.files[0];
    showFile();
})

function showFile() {
    let fileType = file.type;

    let validExtension = ["image/jpeg", "image/jpg", "image/png"];
    if (validExtension.includes(fileType)) {
        // alert("This is an Image File!");
        let fileReader = new FileReader();
        fileReader.onload = () => {
            let fileUrl = fileReader.result
            let imgTag = `<img src="${fileUrl}" alt="">`;
            dragArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    } else {
        alert("This is not an Image File!");
        dragArea.classList.remove("active");

    }
}