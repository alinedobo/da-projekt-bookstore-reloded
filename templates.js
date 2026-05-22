function getBookTemplate(books, bookIndex){
    return /*html*/`
          <section class="book-card">
            <h2 id="book-title-${bookIndex}">'${books[bookIndex].name}'</h2>
                <img src="./assets/images/Vectorizeimages-Iconpack-Book.512.png" alt="image of a book"></img>
            <table class="book-details" id="book-details-${bookIndex}">
                <tr>    
                    <th>Autor:</th>
                    <td>${books[bookIndex].author}</td>
                </tr>
                <tr>
                    <th>Erschien:</th>
                    <td>${books[bookIndex].publishedYear}</td>
                </tr>
                <tr>
                    <th>Genre:</th>
                    <td>${books[bookIndex].genre}</td>
                </tr>
            </table>
            <div class="book-numbers">
                <h3 id="book-price-${bookIndex}">${books[bookIndex].price.toFixed(2)}€</h3>
                <div class="likes-and-liked">
                <p id="likes-counter-${bookIndex}">${books[bookIndex].likes}</p>
                <button id="like-${bookIndex}" onclick="toggleLike(${bookIndex})">
                ${books[bookIndex].liked ? "&#128150;" : "&#128148"}
                </button>
                </div>
            </div>
            <div>
            <h3>Kommentare:</h3>
            <div class="comment-box">
                <table id="comments-table-${bookIndex}">
                ${renderComments(bookIndex)}
                </table>
            </div>
            <h3>Teile deine Meinung:</h3>
            <div class="comment-input-box">
                <input type="text" id="comment-input-${bookIndex}">
                <button onclick="saveComment(${bookIndex})">&#10146;</button>
            </div>
            </div>
        </section>
        `;
}


function getComments(bookIndex, commentIndex){
    return /*html*/`
                <tr>
                    <td>${books[bookIndex].comments[commentIndex].name}:</td>
                    <td>${books[bookIndex].comments[commentIndex].comment}</td>
                </tr>
        `
}
