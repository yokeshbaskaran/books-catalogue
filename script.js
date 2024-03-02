
var popoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")

var addpopbtn = document.getElementById("add-popup-btn");

addpopbtn.addEventListener("click", function () {
    popoverlay.style.display = "block";
    popupbox.style.display = "block";
})

var cancelbtn = document.getElementById("cancel-popup");

cancelbtn.addEventListener("click", function (event) {
    event.preventDefault();
    popoverlay.style.display = "none";
    popupbox.style.display = "none";
})

// 
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");

var booktitle = document.getElementById("book-title-input");
var bookauthor = document.getElementById("book-author-input");
var bookdes = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
    event.preventDefault();
    if (booktitle.value === '' || bookauthor.value === '') {
        alert("Enter Details to Add")
    }
    else {
        var div = document.createElement("div");
        div.setAttribute("class", "book-container");
        div.innerHTML = `
            <h2>${booktitle.value}</h2>
            <h5>${bookauthor.value}</h5>
            <p>${bookdes.value}</p>
            <button onclick="deletebook(event)">Delete</button> `;
        container.append(div);
        popoverlay.style.display = "none";
        popupbox.style.display = "none";
    }
})

function deletebook(event) {
    event.target.parentElement.remove();
}












