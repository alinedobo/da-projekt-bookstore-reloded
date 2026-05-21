function init(){
    renderBookCards();
}

function renderBookCards(){
    const bookCardRef = document.getElementById("books-wrapper");
    bookCardRef.innerHTML = "";
    for(let index = 0; index < books.length; index++){
        bookCardRef.innerHTML += /*html*/`
        <h2 id="book-title-${index}">${books[index].name}</h2>
            <img src="./assets/images/Vectorizeimages-Iconpack-Book.512.png" alt="image of a book"></img>
    <table id="book-details-${index}">
    </table>
    <div>
        <h3 id="book-price-${index}"></h3>
        <div>
            <p class="likes" id="id=book-likes-${index}">${books[index].likes}</p>
            <p class="liked-or-not" id="id=book-liked-or-not-${index}">${books[index].liked}</p>
        </div>
    </div>
        `;
    }
}
